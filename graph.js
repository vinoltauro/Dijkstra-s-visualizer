
function graphCreator (V, E)
{

let adjacencyList = [];

  for (let i = 0 ; i < V ; i++)
  {
    adjacencyList.push([]);
  }

for (let i = 0 ; i < E.length ; i ++)
{
  adjacencyList[E[i][0]-1].push([E[i][1]-1,E[i][2]]);
  adjacencyList[E[i][1]-1].push([E[i][0]-1,E[i][2]]);
}

return adjacencyList;

}


let v = 5;
let edges = [[1,2,3],[1,4,2],[3,5,1],[3,4,3]];
let graph = graphCreator(v,edges);
console.log(graph);
