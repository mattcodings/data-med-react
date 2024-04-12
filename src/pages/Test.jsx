const Test = () => {
  return <div>Test</div>;
};
export default Test;
// import { useEffect, useState } from "react";

// const url = "https://course-api.com/react-store-products";
// const Test = () => {
//   const [data, setData] = useState("");
//   const fetchData = async (url) => {
//     const response = await fetch(url);

//     const dataList = await response.json();

//     setData(dataList);
//   };

//   useEffect(() => {
//     fetchData(url);
//   }, []);
//   console.log(data);
//   const headers = Object.keys(data[0]);
//   return (
//     <table>
//       <thead>
//         <tr>
//           {headers.map((key) => {
//             return <th key={key}>{key}</th>;
//           })}
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((item) => (
//           <tr key={item.id}>
//             {headers.map((header) => (
//               <td key={`${item.id}-${header}`}>{item[header]}</td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };
// export default Test;
