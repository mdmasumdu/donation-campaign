

import { PieChart, Pie, Cell } from "recharts";
import { getlocalstoarageitem } from "../../Utilities/Utility";
import { useEffect, useState } from "react";






const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 12;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
} ) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


const Statistics = () => {

    


    const [statistics,setStatistics] = useState(0)
    const [remaingstat,setRemaningstat] = useState(0);





    useEffect(()=>{

        const savedid =  getlocalstoarageitem()
  
       setStatistics(savedid.length)
       const remaining = 12 - savedid.length;
       setRemaningstat(remaining)
  
  
       
  
      },[])


      const data = [
        { name: "Group A", value:7 },
        { name: "Group B", value: 5,}
      ];
      
      console.log(statistics,remaingstat)
    return (
        <div className="flex justify-center">

            <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey= 'value'
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
        </div>
    );
};

export default Statistics;