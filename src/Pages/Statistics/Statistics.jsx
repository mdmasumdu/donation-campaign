
import { PieChart, Pie,  Cell, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const data = [
        { name: "Group A", value: 400 },
        { name: "Group B", value: 300 },
        { name: "Group C", value: 300 },
        { name: "Group D", value: 200 }
      ];
      
      
      
 
    return (
        <div>
            <h2>Statistics</h2>


            <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400} data={data}>
          <Pie dataKey='name'>
      
          </Pie>
        </PieChart>
      </ResponsiveContainer>
        </div>
    );
};

export default Statistics;