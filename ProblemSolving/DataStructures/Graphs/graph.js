class Graph {

    constructor(v) {
        this.vertices = v;
        this.edges = 0;
        this.adj = [];
        this.marked = [];
        for (let i = 0; i < this.vertices; i++) {
            this.adj[i] = [];
            this.adj[i].push('');
            this.marked[i] = false;
        }
    }

    addEdge(v, w) {
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }

    showGraph() {
        let print = [];
        for (let i = 0; i < this.vertices; i++) {
            print[i] = `${i} -> `;
            for (let j = 0; j < this.vertices; j++) {
                if (this.adj[i][j] !== undefined) {
                    print[i] = print[i] +  `${this.adj[i][j]} `;
                }
            }
        }
        console.log(print)
    }

    dfs(v) {
        this.marked[v] = true;
        if (this.adj[v] !== undefined) {
            console.log('Visited vertex -> ', v);
        }
        for (let w in this.adj[v]) {
            if(!this.marked[w]) {
                this.dfs(w);
            }
        }
    }
}

let graph = new Graph(5);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.showGraph();
graph.dfs(0);