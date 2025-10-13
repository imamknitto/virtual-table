import{j as e}from"./index-B2iC2mV1.js";import{r as t,L as p}from"./router-BDK15HzG.js";import{V as b}from"./virtual-table-DBXnPqra.js";import{f as n}from"./chunk-4X5ZEQ5K-B-QA3Nks.js";import"./utils-BrsFTMAM.js";import"./vendor-1zw1pNgy.js";import"./virtual-C9-IbyhX.js";const y=({title:o,code:s})=>e.jsxs("div",{className:"mt-4 border rounded-lg overflow-hidden",children:[e.jsx("div",{className:"bg-muted px-4 py-2 border-b",children:e.jsx("span",{className:"text-sm font-medium",children:o})}),e.jsx("pre",{className:"p-4 overflow-x-auto bg-background",children:e.jsx("code",{className:"text-sm",children:s})})]}),f=t.memo(y),N=()=>e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight mb-4",children:"Scrolling Features Overview"}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-3",children:[e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"📊 Scroll Tracking"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsx("li",{children:"• Real-time scroll position tracking"}),e.jsx("li",{children:"• Both vertical and horizontal scroll"}),e.jsx("li",{children:"• Perfect for analytics and UX features"}),e.jsx("li",{children:"• Optimized with throttling"})]})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"🎯 Programmatic Control"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsx("li",{children:"• Access table scroll element via ref"}),e.jsx("li",{children:"• Smooth scrolling animations"}),e.jsx("li",{children:"• Precise position control"}),e.jsx("li",{children:"• Great for navigation features"})]})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"♾️ Infinite Loading"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsx("li",{children:"• Bottom detection with threshold"}),e.jsx("li",{children:"• Performance optimized"}),e.jsx("li",{children:"• Throttled to prevent spam"}),e.jsx("li",{children:"• Perfect for large datasets"})]})]})]})]}),k=t.memo(N),S=(o=100)=>Array.from({length:o},(s,c)=>({id:c+1,name:n.person.fullName(),email:n.internet.email(),department:n.commerce.department(),position:n.person.jobTitle(),salary:n.number.int({min:3e4,max:15e4}),startDate:n.date.past({years:5}).toISOString().split("T")[0],status:n.helpers.arrayElement(["active","inactive"]),location:n.location.city(),manager:n.person.fullName(),performance:n.number.int({min:1,max:5})})),j=()=>[{key:"id",caption:"ID",width:80},{key:"name",caption:"Name",width:200},{key:"email",caption:"Email",width:250},{key:"department",caption:"Department",width:150},{key:"position",caption:"Position",width:180},{key:"salary",caption:"Salary",width:120,renderCell:o=>`$${o.salary.toLocaleString()}`},{key:"startDate",caption:"Start Date",width:120},{key:"location",caption:"Location",width:150},{key:"manager",caption:"Manager",width:180},{key:"performance",caption:"Rating",width:100},{key:"status",caption:"Status",width:100}],v={scrollTracking:`import { VirtualTable, type IHeader } from '@knitto/virtual-table';
import { useRef, useCallback } from 'react';

const ScrollTrackingTable = () => {
  const tableRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState({ 
    scrollTop: 0, 
    scrollLeft: 0 
  });

  // Track scroll position
  const handleScroll = useCallback((scrollTop: number, scrollLeft: number) => {
    setScrollPosition({ scrollTop, scrollLeft });
    console.log('Scroll position:', { scrollTop, scrollLeft });
  }, []);

  const headers: IHeader<Employee>[] = [
    { key: 'id', caption: 'ID', width: 80 },
    { key: 'name', caption: 'Name', width: 200 },
    // ... other headers
  ];

  return (
    <VirtualTable
      ref={tableRef}
      headers={headers}
      data={data}
      rowKey="id"
      onScroll={handleScroll}
    />
  );
};`,programmaticScrolling:`import { VirtualTable, type IHeader } from '@knitto/virtual-table';
import { useRef } from 'react';

const ProgrammaticScrollTable = () => {
  const tableRef = useRef<HTMLDivElement>(null);

  // Programmatic scroll functions
  const scrollToTop = () => {
    tableRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    tableRef.current?.scrollTo({ 
      top: tableRef.current.scrollHeight, 
      behavior: 'smooth' 
    });
  };

  const scrollToPosition = (top: number, left: number = 0) => {
    tableRef.current?.scrollTo({ top, left, behavior: 'smooth' });
  };

  return (
    <div>
      <div className="mb-4 space-x-2">
        <button onClick={scrollToTop}>Scroll to Top</button>
        <button onClick={scrollToBottom}>Scroll to Bottom</button>
        <button onClick={() => scrollToPosition(500)}>Scroll to 500px</button>
      </div>
      
      <VirtualTable
        ref={tableRef}
        headers={headers}
        data={data}
        rowKey="id"
      />
    </div>
  );
};`,infiniteScroll:`import { VirtualTable, type IHeader } from '@knitto/virtual-table';
import { useCallback, useState } from 'react';

const InfiniteScrollTable = () => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);

  // Handle scroll to bottom for infinite loading
  const handleScrollTouchBottom = useCallback(() => {
    if (isLoading) return;
    
    setIsLoading(true);
    
    // Simulate API call
    fetchMoreData()
      .then(newData => {
        setData(prev => [...prev, ...newData]);
        setIsLoading(false);
      });
  }, [isLoading]);

  return (
    <VirtualTable
      headers={headers}
      data={data}
      rowKey="id"
      onScrollTouchBottom={handleScrollTouchBottom}
    />
  );
};`},T=({initialData:o})=>{const[s,c]=t.useState(!1),[i,h]=t.useState(o),[m,u]=t.useState(0),[d,r]=t.useState(!1),x=j(),l=t.useCallback(()=>{u(a=>a+1),r(!0),setTimeout(()=>{const a=S(20);h(g=>[...g,...a]),r(!1)},1e3)},[]);return e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Scroll Touch Bottom for Infinite Loading"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2",onClick:()=>c(!s),children:s?"Hide Code":"Show Code"})]}),e.jsx("div",{className:"mb-4 p-4 bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 rounded-lg",children:e.jsxs("p",{className:"text-sm text-orange-800 dark:text-orange-200",children:[e.jsx("strong",{children:"Infinite Scroll:"})," Use the"," ",e.jsx("code",{className:"bg-orange-100 dark:bg-orange-900 px-1 rounded",children:"onScrollTouchBottom"})," ","prop to detect when users scroll near the bottom. Perfect for implementing infinite loading, pagination, or lazy loading of data."]})}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsx("div",{className:"lg:col-span-2",children:e.jsx("div",{className:"h-96",children:e.jsx(b,{data:i,filterHeight:32,headerHeight:40,headers:x,isLoading:d,onScrollTouchBottom:l,rowHeight:32,rowKey:"id"})})}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"Infinite Scroll Stats"}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Total Records:"})," ",i.length]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Bottom Touches:"})," ",m]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Loading:"})," ",d?"Yes":"No"]})]})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"How it Works"}),e.jsxs("div",{className:"text-sm space-y-2",children:[e.jsx("p",{children:"• Scroll to the bottom of the table"}),e.jsx("p",{children:"• New data will be loaded automatically"}),e.jsx("p",{children:"• Threshold: 100px from bottom"}),e.jsx("p",{children:"• Throttled to prevent excessive calls"})]})]})]})]}),s&&e.jsx(f,{code:v.infiniteScroll,title:"Infinite Scroll Implementation"})]})},w=t.memo(T),C=()=>e.jsx("section",{children:e.jsxs("div",{className:"rounded-lg border bg-muted/50 p-6",children:[e.jsx("h3",{className:"font-semibold text-lg mb-2",children:"🚀 Next Steps"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:"Ready to implement advanced scrolling features? Explore these related examples:"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(p,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/large-dataset",children:"Large Datasets"}),e.jsx(p,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/freeze-column",children:"Freeze Columns"}),e.jsx(p,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/click-row-action",children:"Row Actions"})]})]})}),P=t.memo(C),L=()=>e.jsx("section",{children:e.jsxs("div",{className:"rounded-lg border bg-muted/50 p-6",children:[e.jsx("h3",{className:"font-semibold text-lg mb-2",children:"⚡ Performance Tips"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:"Here are some best practices for implementing scrolling features efficiently:"}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"Scroll Event Optimization"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsx("li",{children:"• Use throttling or debouncing for scroll events"}),e.jsx("li",{children:"• Implement passive event listeners"}),e.jsx("li",{children:"• Use requestAnimationFrame for smooth updates"}),e.jsx("li",{children:"• Avoid heavy computations in scroll handlers"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"Infinite Loading Best Practices"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsx("li",{children:"• Set appropriate threshold values (50-100px)"}),e.jsx("li",{children:"• Implement loading states and error handling"}),e.jsx("li",{children:"• Consider data pagination for very large datasets"}),e.jsx("li",{children:"• Use virtual scrolling for optimal performance"})]})]})]})]})}),I=t.memo(L),H=({data:o})=>{const[s,c]=t.useState(!1),i=t.useRef(null),h=j(),m=()=>{var r;(r=i.current)==null||r.scrollTo({top:0,behavior:"smooth"})},u=()=>{var r;(r=i.current)==null||r.scrollTo({top:i.current.scrollHeight,behavior:"smooth"})},d=(r,x=0)=>{var l;(l=i.current)==null||l.scrollTo({top:r,left:x,behavior:"smooth"})};return e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Programmatic Scrolling with Ref"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2",onClick:()=>c(!s),children:s?"Hide Code":"Show Code"})]}),e.jsx("div",{className:"mb-4 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg",children:e.jsxs("p",{className:"text-sm text-green-800 dark:text-green-200",children:[e.jsx("strong",{children:"Programmatic Scrolling:"})," Use the"," ",e.jsx("code",{className:"bg-green-100 dark:bg-green-900 px-1 rounded",children:"ref"})," prop to access the table's scroll element and implement programmatic scrolling. Great for navigation, search results, or user-controlled scrolling."]})}),e.jsxs("div",{className:"mb-4 flex flex-wrap gap-2",children:[e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",onClick:m,children:"📍 Scroll to Top"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",onClick:u,children:"📍 Scroll to Bottom"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",onClick:()=>d(500),children:"📍 Scroll to 500px"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",onClick:()=>d(1e3,200),children:"📍 Scroll to (1000px, 200px)"})]}),e.jsx("div",{className:"h-96",children:e.jsx(b,{data:o,filterHeight:32,headerHeight:40,headers:h,ref:i,rowHeight:32,rowKey:"id"})}),s&&e.jsx(f,{code:v.programmaticScrolling,title:"Programmatic Scrolling Implementation"})]})},R=t.memo(H),D=({data:o})=>{const[s,c]=t.useState(!1),[i,h]=t.useState({scrollTop:0,scrollLeft:0}),[m,u]=t.useState([]),d=t.useRef(null),r=j(),x=t.useCallback((l,a)=>{h({scrollTop:l,scrollLeft:a}),u(g=>[`Scroll: Top=${Math.round(l)}, Left=${Math.round(a)}`,...g.slice(0,4)])},[]);return e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Scroll Tracking with onScroll Prop"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2",onClick:()=>c(!s),children:s?"Hide Code":"Show Code"})]}),e.jsx("div",{className:"mb-4 p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg",children:e.jsxs("p",{className:"text-sm text-blue-800 dark:text-blue-200",children:[e.jsx("strong",{children:"Scroll Tracking:"})," Use the"," ",e.jsx("code",{className:"bg-blue-100 dark:bg-blue-900 px-1 rounded",children:"onScroll"})," prop to track scroll position in real-time. Perfect for implementing scroll-based features like sticky headers, progress indicators, or analytics."]})}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsx("div",{className:"lg:col-span-2",children:e.jsx("div",{className:"h-96",children:e.jsx(b,{data:o,filterHeight:32,headerHeight:40,headers:r,onScroll:x,ref:d,rowHeight:32,rowKey:"id"})})}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"Current Scroll Position"}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Scroll Top:"})," ",Math.round(i.scrollTop),"px"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Scroll Left:"})," ",Math.round(i.scrollLeft),"px"]})]})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"Scroll Events"}),e.jsx("div",{className:"text-sm space-y-1 max-h-32 overflow-y-auto",children:m.length>0?m.map((l,a)=>e.jsx("p",{className:"text-xs bg-muted px-2 py-1 rounded",children:l},a)):e.jsx("p",{className:"text-muted-foreground",children:"No scroll events yet"})})]})]})]}),s&&e.jsx(f,{code:v.scrollTracking,title:"Scroll Tracking Implementation"})]})},B=t.memo(D),E=()=>{const o=t.useMemo(()=>S(50),[]);return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight",children:"Scrolling Features"}),e.jsx("p",{className:"text-xl text-muted-foreground mt-4",children:"Learn how to implement advanced scrolling features with the Virtual Table, including scroll tracking, programmatic scrolling, and infinite scroll functionality."})]}),e.jsx(B,{data:o}),e.jsx(R,{data:o}),e.jsx(w,{initialData:o}),e.jsx(k,{}),e.jsx(I,{}),e.jsx(P,{})]})},F=t.memo(E);export{F as default};
//# sourceMappingURL=index-aKY_-0KK.js.map
