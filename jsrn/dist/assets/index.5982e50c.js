var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,o=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,i=(e,i)=>{for(var r in i||(i={}))t.call(i,r)&&o(e,r,i[r]);if(a)for(var r of a(i))n.call(i,r)&&o(e,r,i[r]);return e},r=(e,t,a)=>(o(e,"symbol"!=typeof t?t+"":t,a),a);import{E as s,a as l,b as d,T as c,S as p,L as h,B as m,c as g,R as u,d as f}from"./vendor.9be75f55.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const n=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,i)=>{const r=new URL(e,n);if(self[t].moduleMap[r])return a(self[t].moduleMap[r]);const s=new Blob([`import * as m from '${r}';`,`${t}.moduleMap['${r}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){i(new Error(`Failed to import: ${e}`)),o(l)},onload(){a(self[t].moduleMap[r]),o(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("/assets/");s.defaults.baseURL="https://api.loli.monster",s.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",s.defaults.transformRequest=[function(e){let t;if(e&&e.file){t=new FormData,t.append("file",e.file),delete e.file;for(let a in e)t.append(a,e[a])}else{t="";for(let a in e)t+=encodeURIComponent(a)+"="+encodeURIComponent(e[a])+"&"}return t}],s.defaults.timeout=1e4,s.interceptors.response.use((e=>200==e.status?Promise.resolve(e):Promise.reject(e)),(e=>{l.error(`异常请求：${JSON.stringify(e.message)}`)}));var w={post:(e,t)=>new Promise(((a,n)=>{s({method:"post",url:e,data:t}).then((e=>{let t=e.data;2==t.error?l.error(t.info):a(t)})).catch((e=>{n(e)}))})),get:(e,t)=>new Promise(((a,n)=>{s({method:"get",url:e,params:t}).then((e=>{let t=e.data;2==t.error?l.error(t.info):a(t)})).catch((e=>{n(e)}))}))};const E=[{title:"title",dataIndex:"title",width:"40%"},{title:"author",dataIndex:"author",width:"20%"},{title:"reply_num",dataIndex:"reply_num",width:"10%"},{title:"good",dataIndex:"good",width:"10%"},{title:"Action",width:"20%",render:(e,t)=>{console.log(t);const a=t.id,n=t.title;return d.createElement(p,{size:"middle"},d.createElement(h,{to:"/post/"+a+"/"+n},"详情"))}}];console.log("thread live");class b extends d.Component{constructor(){super(...arguments),r(this,"state",{data:[],pagination:{currentPage:1,pageSize:10},loading:!1}),r(this,"fetch",((e={})=>{this.setState({loading:!0});const{pagination:t}=e;(async(e={})=>w.get("/getThreadList",e))(t?{currentPage:t.current,pageSize:t.pageSize}:this.state.pagination).then((e=>{this.setState({data:e.data.list,loading:!1,pagination:{total:e.data.pagination.total,pageSize:e.data.pagination.pageSize,currentPage:e.data.pagination.currentPage}})}))})),r(this,"handleTableChange",((e,t,a)=>{this.fetch(i({sortField:a.field,sortOrder:a.order,pagination:e},t))}))}componentDidMount(){this.fetch()}render(){return d.createElement("div",{className:"Thread"},d.createElement("h1",null,"thread list"),d.createElement(c,{columns:E,rowKey:this.state.data.id,dataSource:this.state.data,pagination:this.state.pagination,loading:this.state.loading,onChange:this.handleTableChange}))}}const y=[{title:"floor",dataIndex:"floor",width:"10%"},{title:"author",dataIndex:"author",width:"20%"},{title:"content",dataIndex:"content",width:"40%"},{title:"time",dataIndex:"time",width:"10%"},{title:"Action",width:"20%",render:(e,t)=>{console.log(t);const a=t.id;return d.createElement(p,{size:"middle"},d.createElement("a",{href:"/comment?id="+a},"详情"))}}];console.log("post live");class S extends d.Component{constructor(){super(...arguments),r(this,"state",{title:"",thread_id:0,data:[],pagination:{currentPage:1,pageSize:10},loading:!1}),r(this,"fetch",((e={})=>{this.setState({loading:!0});const{pagination:t}=e;let a=t?{currentPage:t.current,pageSize:t.pageSize}:this.state.pagination;a.thread_id=this.state.thread_id,console.log(a),(async(e={})=>w.get("/getPostList",e))(a).then((e=>{this.setState({data:e.data.list,loading:!1,pagination:{total:e.data.pagination.total,pageSize:e.data.pagination.pageSize,currentPage:e.data.pagination.currentPage}})}))})),r(this,"handleTableChange",((e,t,a)=>{this.fetch(i({sortField:a.field,sortOrder:a.order,pagination:e},t))}))}componentDidMount(){console.log(this.props),this.state.thread_id=this.props.match.params.id,this.state.title=this.props.match.params.title,this.fetch()}render(){return d.createElement("div",{className:"Post"},d.createElement("h1",null,this.state.title),d.createElement(c,{columns:y,rowKey:this.state.data.id,dataSource:this.state.data,pagination:this.state.pagination,loading:this.state.loading,onChange:this.handleTableChange}))}}function P(){return d.useState(0),d.useEffect((()=>{console.log("生命周期")}),[]),d.createElement("div",{className:"App"},d.createElement(m,null,d.createElement(g,null,d.createElement(u,{path:"/threadc",component:b}),d.createElement(u,{path:"/post/:id/:title",component:S})),d.createElement(h,{to:"/threadc"},"Thread List"),d.createElement(h,{to:"/"},"❤ Index")))}f.render(d.createElement(d.StrictMode,null,d.createElement(P,null)),document.getElementById("root"));
