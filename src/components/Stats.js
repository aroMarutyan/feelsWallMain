import * as d3 from "d3";
import { useEffect } from "react";
import { colorCoding } from "../core/colorCoding";

import {
  css,
  dynamicFontSize,
  mobileTest,
  outerRadius,
  innerRadius,
} from "../styles/mediaStyles";

const Stats = ({ messages }) => {
  //Messages submitted dymanic font
  const msgMinFontSize = 1.8;
  const msgMaxFontSize = 4.6;
  const msgFontSize = dynamicFontSize(msgMinFontSize, msgMaxFontSize);
  //Pie chart dynamic font - not necessary anymore
  const chartMinFontSize = 1.3;
  const chartMaxFontSize = 2.2;
  const chartFontSize = dynamicFontSize(chartMinFontSize, chartMaxFontSize);
  //Message breakdown dynamic font
  const breakdownMinFontSize = 1.3;
  const breakdownMaxFontSize = 2.6;
  const breakdownFontSize = dynamicFontSize(
    breakdownMinFontSize,
    breakdownMaxFontSize
  );
  //Page layout styles. Grid variants for desktop and mobile
  const gridStats = css({
    height: "95vh",
    width: "95vw",
    display: "grid",

    variants: {
      variant: {
        mobile: {
          gridTemplateColumns: "1fr",
          gridTemplateRows: "1fr 1fr 1fr",
        },
        desktop: {
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
        },
      },
    },
  });
  // Pie chart grid position
  const pieChartStyle = css({
    variants: {
      variant: {
        desktop: {
          gridRow: "1 /span 2",
        },
      },
    },
  });

  const messagesStyle = css({
    fontSize: `clamp(${msgMinFontSize}rem, ${msgFontSize}rem, ${msgMaxFontSize}rem)`,
    color: "black",
    letterSpacing: "0.5rem",
  });

  const msgBreakdownStyle = css({
    fontSize: `clamp(${breakdownMinFontSize}rem, ${breakdownFontSize}rem, ${breakdownMaxFontSize}rem)`,
    color: "black",
    listStyle: "none",
    // alignSelf: "center",
    placeSelf: "center",
    letterSpacing: "0.3rem",
  });

  // Pie chart measurements
  const margin = {
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
  };
  const width = 2 * outerRadius + margin.left + margin.right;
  const height = 2 * outerRadius + margin.top + margin.bottom;

  useEffect(() => {
    drawChart();
  }, [messages]);

  /** Function that removes all children of a parent element
   * Used to refresh the messages breakdown list
   * @param  {} parent - parent node
   */
  const childKiller = (parent) => {
    while (parent.firstChild) {
      parent.firstChild.remove();
    }
  };

  /** Function to retrieve the total count for each emtion and digest the data for the chart
   * @param  {} messages - Up-to-date messages array retrieved from Firestore
   */
  const dataRetriever = (messages) => {
    let arr = messages.map((entry) => {
      return entry.emotion;
    });
    let unique = [...new Set(arr)];

    let finalData = unique.map((value) => [
      value,
      arr.filter((str) => str === value).length,
    ]);
    return finalData.sort();
  };
  const dataReady = dataRetriever(messages);

  const breakdownList = document.getElementById("breakdown-list");

  /** Function to create the breakdown list of peoples feelings
   * @param  {} arr - emotion count data
   * @param  {} list - node element that will be populated with the data
   * First the function checks for any existing content and deletes it
   * Then it populates the list with the newly fetched data
   * The data is refreshed every time a new message is added to the database
   */
  const breakdownListGenerator = (arr, list) => {
    breakdownList !== null && childKiller(breakdownList);

    arr.forEach((entry) => {
      // let magicWord = (entry[0].style.color = "red");
      let listItem = document.createElement("li");
      let emoWord = document.createElement("span");
      emoWord.innerHTML = entry[0];
      listItem.innerHTML = `${entry[1]} ${
        entry[1] > 1 ? "people are" : "person is"
      } ${entry[0] === "love" ? "in" : ""}`;

      emoWord.style.color = colorCoding.get(entry[0]);

      listItem.appendChild(emoWord);
      list.appendChild(listItem);
    });
  };
  dataReady && breakdownListGenerator(dataReady, breakdownList);

  // D3.js pie chart
  function drawChart() {
    //reduce method - more elegant solution. Check if you can implement it without too much headache
    // const filteredMessages = messages
    //   .map((entry) => {
    //     return entry.emotion;
    //   })
    //   .reduce((a, c) => a.set(c, (a.get(c) || 0) + 1), new Map());

    // Remove the old svg
    d3.select("#pie-container").select("svg").remove();

    // Create new svg
    const svg = d3
      .select("#pie-container")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const arcGenerator = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);

    const pieGenerator = d3
      .pie()
      .padAngle(0)
      .value((d) => d[1]);

    const arc = svg.selectAll().data(pieGenerator(dataReady)).enter();

    arc
      .append("path")
      .attr("d", arcGenerator)
      .style("fill", (d) => colorCoding.get(d.data[0]))
      .style("stroke", "#ffffff")
      .style("stroke-width", 0);

    // Append text labels
    // arc
    //   .append("text")
    //   // .data(data_ready)
    //   .attr("text-anchor", "middle")
    //   .attr("alignment-baseline", "middle")
    //   .text((d) => d.data[0])
    //   .style("fill", "white")
    //   .style("text-anchor", "middle")
    //   .style(
    //     "font-size",
    //     `clamp(${chartMinFontSize}rem, ${chartFontSize}rem, ${chartMaxFontSize}rem)`
    //   )
    //   .attr("transform", function (d) {
    //     return `translate(${arcGenerator.centroid(d)})`;
    //   });
  }
  return (
    <div className={gridStats({ variant: mobileTest ? "desktop" : "mobile" })}>
      <div
        id="pie-container"
        className={pieChartStyle({ variant: mobileTest && "desktop" })}
      />
      <h1 className={messagesStyle()}>Feelings Shared: {messages.length}</h1>
      <ul className={msgBreakdownStyle()} id="breakdown-list"></ul>
    </div>
  );
};

export default Stats;
