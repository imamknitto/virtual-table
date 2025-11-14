import{r as o,j as e,L as b}from"./react-vendor-D4DhKJk1.js";import{K as p}from"./knitto-table-BdyQsNAM.js";import{b as S,a as m,c as T,k as y,d as k,f as w,h as C,j as I}from"./constants-GooGu_-H.js";import"./vendor-Cg9Cit0c.js";import"./knitto-context-mnZ17s7N.js";import"./knitto-hooks-QoacNkhm.js";import"./utils-B-dksMZM.js";import"./knitto-icons-DxxDW9og.js";const P=({title:r,code:n})=>e.jsxs("div",{className:"mt-4 border rounded-lg overflow-hidden",children:[e.jsx("div",{className:"bg-muted px-4 py-2 border-b",children:e.jsx("span",{className:"text-sm font-medium",children:r})}),e.jsx("pre",{className:"p-4 overflow-x-auto bg-background",children:e.jsx("code",{className:"text-sm",children:n})})]}),f=o.memo(P),E=()=>e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight mb-4",children:"Scrolling Features Overview"}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-3",children:[e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"📊 Scroll Tracking"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsx("li",{children:"• Real-time scroll position tracking"}),e.jsx("li",{children:"• Both vertical and horizontal scroll"}),e.jsx("li",{children:"• Perfect for analytics and UX features"}),e.jsx("li",{children:"• Optimized with throttling"})]})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"🎯 Programmatic Control"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsx("li",{children:"• Access table scroll element via ref"}),e.jsx("li",{children:"• Smooth scrolling animations"}),e.jsx("li",{children:"• Precise position control"}),e.jsx("li",{children:"• Great for navigation features"})]})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"♾️ Infinite Loading"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsx("li",{children:"• Bottom detection with threshold"}),e.jsx("li",{children:"• Performance optimized"}),e.jsx("li",{children:"• Throttled to prevent spam"}),e.jsx("li",{children:"• Perfect for large datasets"})]})]})]})]}),L=o.memo(E),R=["active","inactive"],N=(r=100)=>Array.from({length:r},(n,c)=>({id:c+1,name:m(y),email:m(I),department:m(C),position:m(w),salary:S(3e4,15e4),startDate:T(5),status:m(R),location:m(k),manager:m(y),performance:S(1,5)})),j=()=>[{key:"id",caption:"ID",width:80},{key:"name",caption:"Name",width:200},{key:"email",caption:"Email",width:250},{key:"department",caption:"Department",width:150},{key:"position",caption:"Position",width:180},{key:"salary",caption:"Salary",width:120,renderCell:r=>`$${r.salary.toLocaleString()}`},{key:"startDate",caption:"Start Date",width:120},{key:"location",caption:"Location",width:150},{key:"manager",caption:"Manager",width:180},{key:"performance",caption:"Rating",width:100},{key:"status",caption:"Status",width:100}],v={scrollTracking:`import { KnittoTable, type IHeader, type IVirtualTableRef } from '@knitto/virtual-table';
import { useRef, useCallback } from 'react';

const ScrollTrackingTable = () => {
  const tableRef = useRef<IVirtualTableRef>(null);
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
    <KnittoTable
      ref={tableRef}
      headers={headers}
      data={data}
      rowKey="id"
      onScroll={handleScroll}
    />
  );
};`,programmaticScrolling:`import { KnittoTable, type IHeader, type IVirtualTableRef } from '@knitto/virtual-table';
import { useRef } from 'react';

const ProgrammaticScrollTable = () => {
  const tableRef = useRef<IVirtualTableRef>(null);

  // Programmatic scroll functions
  const scrollToTop = () => {
    tableRef.current?.scrollElement?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    tableRef.current?.scrollElement?.scrollTo({ 
      top: tableRef.current.scrollHeight, 
      behavior: 'smooth' 
    });
  };

  const scrollToPosition = (top: number, left: number = 0) => {
    tableRef.current?.scrollElement?.scrollTo({ top, left, behavior: 'smooth' });
  };

  const scrollToIndex = (index: number) => {
    // Sometimes we need no find the proper index to set proper position
    tableRef.current?.virtualizer?.scrollToIndex(index - 1, { align: 'start', behavior: 'smooth' });
  };

  return (
    <div>
      <div className="mb-4 space-x-2">
        <button onClick={scrollToTop}>Scroll to Top</button>
        <button onClick={scrollToBottom}>Scroll to Bottom</button>
        <button onClick={() => scrollToPosition(500)}>Scroll to 500px</button>
        <button onClick={() => scrollToIndex(10)}>Scroll to Index 10</button>
      </div>
      
      <KnittoTable
        ref={tableRef}
        headers={headers}
        data={data}
        rowKey="id"
      />
    </div>
  );
};`,infiniteScroll:`import { KnittoTable, type IHeader} from '@knitto/virtual-table';
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
    <KnittoTable
      headers={headers}
      data={data}
      rowKey="id"
      onScrollTouchBottom={handleScrollTouchBottom}
    />
  );
};`},H=({initialData:r})=>{const[n,c]=o.useState(!1),[l,x]=o.useState(r),[h,g]=o.useState(0),[d,u]=o.useState(!1),i=j(),t=o.useCallback(()=>{g(s=>s+1),u(!0),setTimeout(()=>{const s=N(20);x(a=>[...a,...s]),u(!1)},1e3)},[]);return e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Scroll Touch Bottom for Infinite Loading"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2",onClick:()=>c(!n),children:n?"Hide Code":"Show Code"})]}),e.jsx("div",{className:"mb-4 p-4 bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 rounded-lg",children:e.jsxs("p",{className:"text-sm text-orange-800 dark:text-orange-200",children:[e.jsx("strong",{children:"Infinite Scroll:"})," Use the"," ",e.jsx("code",{className:"bg-orange-100 dark:bg-orange-900 px-1 rounded",children:"onScrollTouchBottom"})," ","prop to detect when users scroll near the bottom. Perfect for implementing infinite loading, pagination, or lazy loading of data."]})}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsx("div",{className:"lg:col-span-2",children:e.jsx("div",{className:"h-96",children:e.jsx(p,{data:l,filterHeight:32,headerHeight:40,headers:i,isLoading:d,onScrollTouchBottom:t,rowHeight:32,rowKey:"id"})})}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"Infinite Scroll Stats"}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Total Records:"})," ",l.length]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Bottom Touches:"})," ",h]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Loading:"})," ",d?"Yes":"No"]})]})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"How it Works"}),e.jsxs("div",{className:"text-sm space-y-2",children:[e.jsx("p",{children:"• Scroll to the bottom of the table"}),e.jsx("p",{children:"• New data will be loaded automatically"}),e.jsx("p",{children:"• Threshold: 100px from bottom"}),e.jsx("p",{children:"• Throttled to prevent excessive calls"})]})]})]})]}),n&&e.jsx(f,{code:v.infiniteScroll,title:"Infinite Scroll Implementation"})]})},D=o.memo(H),B=()=>e.jsx("section",{children:e.jsxs("div",{className:"rounded-lg border bg-muted/50 p-6",children:[e.jsx("h3",{className:"font-semibold text-lg mb-2",children:"🚀 Next Steps"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:"Ready to implement advanced scrolling features? Explore these related examples:"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(b,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/large-dataset",children:"Large Datasets"}),e.jsx(b,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/freeze-column",children:"Freeze Columns"}),e.jsx(b,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/click-row-action",children:"Row Actions"})]})]})}),M=o.memo(B),A=()=>e.jsx("section",{children:e.jsxs("div",{className:"rounded-lg border bg-muted/50 p-6",children:[e.jsx("h3",{className:"font-semibold text-lg mb-2",children:"⚡ Performance Tips"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:"Here are some best practices for implementing scrolling features efficiently:"}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"Scroll Event Optimization"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsx("li",{children:"• Use throttling or debouncing for scroll events"}),e.jsx("li",{children:"• Implement passive event listeners"}),e.jsx("li",{children:"• Use requestAnimationFrame for smooth updates"}),e.jsx("li",{children:"• Avoid heavy computations in scroll handlers"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"Infinite Loading Best Practices"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsx("li",{children:"• Set appropriate threshold values (50-100px)"}),e.jsx("li",{children:"• Implement loading states and error handling"}),e.jsx("li",{children:"• Consider data pagination for very large datasets"}),e.jsx("li",{children:"• Use virtual scrolling for optimal performance"})]})]})]})]})}),K=o.memo(A),$=({data:r})=>{const[n,c]=o.useState(!1),l=o.useRef(null),x=j(),h=()=>{var i,t;(t=(i=l.current)==null?void 0:i.scrollElement)==null||t.scrollTo({top:0,behavior:"smooth"})},g=()=>{var i,t,s,a;(a=(i=l.current)==null?void 0:i.scrollElement)==null||a.scrollTo({top:(s=(t=l.current)==null?void 0:t.scrollElement)==null?void 0:s.scrollHeight,behavior:"smooth"})},d=(i,t=0)=>{var s,a;(a=(s=l.current)==null?void 0:s.scrollElement)==null||a.scrollTo({top:i,left:t,behavior:"smooth"})},u=i=>{var t,s;(s=(t=l.current)==null?void 0:t.virtualizer)==null||s.scrollToIndex(i-1,{align:"start",behavior:"smooth"})};return e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Programmatic Scrolling with Ref"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2",onClick:()=>c(!n),children:n?"Hide Code":"Show Code"})]}),e.jsx("div",{className:"mb-4 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg",children:e.jsxs("p",{className:"text-sm text-green-800 dark:text-green-200",children:[e.jsx("strong",{children:"Programmatic Scrolling:"})," Use the"," ",e.jsx("code",{className:"bg-green-100 dark:bg-green-900 px-1 rounded",children:"ref"})," prop to access the table's scroll element and implement programmatic scrolling. Great for navigation, search results, or user-controlled scrolling."]})}),e.jsxs("div",{className:"mb-4 flex flex-wrap gap-2",children:[e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",onClick:h,children:"📍 Scroll to Top"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",onClick:g,children:"📍 Scroll to Bottom"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",onClick:()=>d(500),children:"📍 Scroll to 500px"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",onClick:()=>d(1e3,200),children:"📍 Scroll to (1000px, 200px)"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",onClick:()=>u(10),children:"📍 Scroll to Index 10"})]}),e.jsx("div",{className:"h-96",children:e.jsx(p,{ref:l,data:r,filterHeight:32,headerHeight:40,headers:x,rowHeight:32,rowKey:"id"})}),n&&e.jsx(f,{code:v.programmaticScrolling,title:"Programmatic Scrolling Implementation"})]})},z=o.memo($),U=({data:r})=>{const[n,c]=o.useState(!1),[l,x]=o.useState({scrollTop:0,scrollLeft:0}),[h,g]=o.useState([]),d=o.useRef(null),u=j(),i=o.useCallback((t,s)=>{x({scrollTop:t,scrollLeft:s}),g(a=>[`Scroll: Top=${Math.round(t)}, Left=${Math.round(s)}`,...a.slice(0,4)])},[]);return e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Scroll Tracking with onScroll Prop"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2",onClick:()=>c(!n),children:n?"Hide Code":"Show Code"})]}),e.jsx("div",{className:"mb-4 p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg",children:e.jsxs("p",{className:"text-sm text-blue-800 dark:text-blue-200",children:[e.jsx("strong",{children:"Scroll Tracking:"})," Use the"," ",e.jsx("code",{className:"bg-blue-100 dark:bg-blue-900 px-1 rounded",children:"onScroll"})," prop to track scroll position in real-time. Perfect for implementing scroll-based features like sticky headers, progress indicators, or analytics."]})}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsx("div",{className:"lg:col-span-2",children:e.jsx("div",{className:"h-96",children:e.jsx(p,{data:r,filterHeight:32,headerHeight:40,headers:u,onScroll:i,ref:d,rowHeight:32,rowKey:"id"})})}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"Current Scroll Position"}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Scroll Top:"})," ",Math.round(l.scrollTop),"px"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Scroll Left:"})," ",Math.round(l.scrollLeft),"px"]})]})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"Scroll Events"}),e.jsx("div",{className:"text-sm space-y-1 max-h-32 overflow-y-auto",children:h.length>0?h.map((t,s)=>e.jsx("p",{className:"text-xs bg-muted px-2 py-1 rounded",children:t},s)):e.jsx("p",{className:"text-muted-foreground",children:"No scroll events yet"})})]})]})]}),n&&e.jsx(f,{code:v.scrollTracking,title:"Scroll Tracking Implementation"})]})},_=o.memo(U),O=()=>{const r=o.useMemo(()=>N(50),[]);return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight",children:"Scrolling Features"}),e.jsx("p",{className:"text-xl text-muted-foreground mt-4",children:"Learn how to implement advanced scrolling features with the Virtual Table, including scroll tracking, programmatic scrolling, and infinite scroll functionality."})]}),e.jsx(_,{data:r}),e.jsx(z,{data:r}),e.jsx(D,{initialData:r}),e.jsx(L,{}),e.jsx(K,{}),e.jsx(M,{})]})},Q=o.memo(O);export{Q as default};
//# sourceMappingURL=index-DWRvnPC3.js.map
