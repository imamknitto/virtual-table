import{j as e}from"./index-B2iC2mV1.js";import{r as i,L as p}from"./router-BDK15HzG.js";import{V as b}from"./virtual-table-DBXnPqra.js";import"./utils-BrsFTMAM.js";import"./vendor-1zw1pNgy.js";import"./virtual-C9-IbyhX.js";const x=()=>e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight mb-4",children:"API Integration"}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"📡 Data Source"}),e.jsxs("p",{className:"text-sm text-muted-foreground mb-3",children:["This example uses ",e.jsx("strong",{children:"JSONPlaceholder API"})," - a free fake REST API for testing and prototyping:"]}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1 mb-4",children:[e.jsxs("li",{children:["• ",e.jsx("code",{className:"bg-muted px-1 rounded",children:"https://jsonplaceholder.typicode.com/users"})," ","- User data"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"bg-muted px-1 rounded",children:"https://jsonplaceholder.typicode.com/posts"})," ","- Post data"]})]}),e.jsx("div",{className:"bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded p-3",children:e.jsxs("p",{className:"text-sm text-blue-800 dark:text-blue-200",children:[e.jsx("strong",{children:"💡 Tip:"})," Replace the API endpoints with your own backend API to implement real server filtering. The filtering logic can be adapted to work with any REST API or GraphQL endpoint."]})})]})]}),y=i.memo(x),v=({title:t,code:u})=>e.jsxs("div",{className:"border rounded-lg overflow-hidden",children:[e.jsx("div",{className:"bg-muted px-4 py-2 border-b",children:e.jsx("span",{className:"text-sm font-medium",children:t})}),e.jsx("pre",{className:"p-4 overflow-x-auto bg-background",children:e.jsx("code",{className:"text-sm",children:u})})]}),j=i.memo(v),w=()=>e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight mb-4",children:"Server Filter Features"}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"🚀 Performance Benefits"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsx("li",{children:"• Server-side filtering reduces client-side processing"}),e.jsx("li",{children:"• Handles large datasets efficiently"}),e.jsx("li",{children:"• Optimized database queries"}),e.jsx("li",{children:"• Reduced network payload"}),e.jsx("li",{children:"• Better memory management"})]})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"🔧 Filter Types"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Search:"})," Text-based filtering"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Selection:"})," Multi-select dropdown filters"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Advanced:"})," Complex filter conditions"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Sorting:"})," Server-side column sorting"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Combined:"})," Multiple filters simultaneously"]})]})]})]})]}),k=i.memo(w),g="https://jsonplaceholder.typicode.com",S=async()=>{const t=await fetch(`${g}/users`);if(!t.ok)throw new Error("Failed to fetch users");return t.json()},C=async()=>{const t=await fetch(`${g}/posts`);if(!t.ok)throw new Error("Failed to fetch posts");return t.json()},V=async t=>{var o;const[u,m]=await Promise.all([S(),C()]);let c=u.map(l=>{const r=m.filter(n=>n.userId===l.id);return{...l,postCount:r.length,posts:r.slice(0,3)}});return t!=null&&t.search&&Object.entries(t.search).forEach(([l,r])=>{r&&(c=c.filter(n=>{const s=n[l];return(typeof s=="object"&&s!==null?JSON.stringify(s):String(s||"")).toLowerCase().includes(r.toLowerCase())}))}),t!=null&&t.selection&&Object.entries(t.selection).forEach(([l,r])=>{r.length>0&&(c=c.filter(n=>{const s=n[l],a=typeof s=="object"&&s!==null?JSON.stringify(s):String(s);return r.includes(a)}))}),t!=null&&t.advance&&Object.entries(t.advance).forEach(([l,r])=>{r.value&&(c=c.filter(n=>{const s=n[l],h=(typeof s=="object"&&s!==null?JSON.stringify(s):String(s||"")).toLowerCase(),d=r.value.toLowerCase();switch(r.config_name){case"equal":return h===d;case"notEqual":return h!==d;case"startsWith":return h.startsWith(d);case"endsWith":return h.endsWith(d);case"contains":return h.includes(d);case"notContains":return!h.includes(d);default:return!0}}))}),(o=t==null?void 0:t.sort)!=null&&o.key&&t.sort.order!=="unset"&&c.sort((l,r)=>{const n=t.sort.key;let s=l[n],a=r[n];return typeof s=="object"&&s!==null&&(s=JSON.stringify(s)),typeof a=="object"&&a!==null&&(a=JSON.stringify(a)),s==null||a==null?0:s<a?t.sort.order==="asc"?-1:1:s>a?t.sort.order==="asc"?1:-1:0}),c},N=()=>[{key:"id",caption:"ID",width:80},{key:"name",caption:"Name",width:180,filterSelectionOptions:["Leanne Graham","Ervin Howell","Clementine Bauch","Patricia Lebsack"]},{key:"username",caption:"Username",width:120,filterSelectionOptions:["Bret","Antonette","Samantha","Karianne"]},{key:"email",caption:"Email",width:200},{key:"phone",caption:"Phone",width:150,filterSelectionOptions:["1-770-736-8031 x56442","010-692-6593 x09125","1-463-123-4447"]},{key:"website",caption:"Website",width:120,filterSelectionOptions:["hildegard.org","anastasia.net","ramiro.info","kale.biz"]},{key:"address",caption:"City",width:120,filterSelectionOptions:["Gwenborough","Wisokyburgh","McKenziehaven","South Elvis"],renderCell:t=>t.address.city},{key:"company",caption:"Company",width:150,filterSelectionOptions:["Romaguera-Crona","Deckow-Crist","Romaguera-Jacobson","Robel-Corkery"],renderCell:t=>t.company.name},{key:"postCount",caption:"Posts",width:80}],f={main:`import { useState, useEffect, useCallback } from 'react';
import { VirtualTable, type IHeader } from '@knitto/virtual-table';
import type { TSortOrder, TFilterAdvanceConfig } from '@knitto/virtual-table/lib/types';

// Types for our API data
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type CombinedData = User & {
  postCount: number;
};

const ServerFilterTable = () => {
  const [data, setData] = useState<CombinedData[]>([]);
  const [loading, setLoading] = useState(false);
  
  // Server filter states
  const [filters, setFilters] = useState({
    search: {} as Record<string, string>,
    sort: { key: null as string | null, order: 'unset' as TSortOrder },
    selection: {} as Record<string, string[]>,
    advance: {} as Record<string, { config_name: TFilterAdvanceConfig; value: string }>,
  });

  // Fetch data from API with server-side filtering
  const fetchData = useCallback(async (filterParams?: {
    search?: Record<string, string>;
    sort?: { key: string; order: TSortOrder };
    selection?: Record<string, string[]>;
    advance?: Record<string, { config_name: TFilterAdvanceConfig; value: string }>;
  }) => {
    setLoading(true);
    try {
      // Fetch users from API
      const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
      const users: User[] = await usersResponse.json();

      // Fetch posts to get post counts
      const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await postsResponse.json();

      // Combine data
      const combinedData: CombinedData[] = users.map(user => ({
        ...user,
        postCount: posts.filter(post => post.userId === user.id).length,
      }));

      // Apply server-side filtering
      let filteredData = combinedData;

      // Apply search filter
      if (filterParams?.search) {
        Object.entries(filterParams.search).forEach(([key, value]) => {
          if (value) {
            filteredData = filteredData.filter(item => {
              const itemValue = item[key as keyof CombinedData];
              const stringValue = typeof itemValue === 'object' && itemValue !== null
                ? JSON.stringify(itemValue)
                : String(itemValue || '');
              return stringValue.toLowerCase().includes(value.toLowerCase());
            });
          }
        });
      }

      // Apply selection filter
      if (filterParams?.selection) {
        Object.entries(filterParams.selection).forEach(([key, values]) => {
          if (values.length > 0) {
            filteredData = filteredData.filter(item => {
              const itemValue = item[key as keyof CombinedData];
              const stringValue = typeof itemValue === 'object' && itemValue !== null
                ? JSON.stringify(itemValue)
                : String(itemValue);
              return values.includes(stringValue);
            });
          }
        });
      }

      // Apply advance filter
      if (filterParams?.advance) {
        Object.entries(filterParams.advance).forEach(([key, filter]) => {
          if (filter.value) {
            filteredData = filteredData.filter(item => {
              const itemValue = item[key as keyof CombinedData];
              const stringValue = typeof itemValue === 'object' && itemValue !== null
                ? JSON.stringify(itemValue)
                : String(itemValue || '');
              const itemValueLower = stringValue.toLowerCase();
              const filterValue = filter.value.toLowerCase();
              
              switch (filter.config_name) {
                case 'equal': return itemValueLower === filterValue;
                case 'notEqual': return itemValueLower !== filterValue;
                case 'startsWith': return itemValueLower.startsWith(filterValue);
                case 'endsWith': return itemValueLower.endsWith(filterValue);
                case 'contains': return itemValueLower.includes(filterValue);
                case 'notContains': return !itemValueLower.includes(filterValue);
                default: return true;
              }
            });
          }
        });
      }

      // Apply sorting
      if (filterParams?.sort?.key && filterParams.sort.order !== 'unset') {
        filteredData.sort((a, b) => {
          const sortKey = filterParams.sort!.key as keyof CombinedData;
          let aVal = a[sortKey];
          let bVal = b[sortKey];
          
          // Convert objects to strings for comparison
          if (typeof aVal === 'object' && aVal !== null) {
            aVal = JSON.stringify(aVal) as any;
          }
          if (typeof bVal === 'object' && bVal !== null) {
            bVal = JSON.stringify(bVal) as any;
          }
          
          if (aVal == null || bVal == null) return 0;
          if (aVal < bVal) return filterParams.sort!.order === 'asc' ? -1 : 1;
          if (aVal > bVal) return filterParams.sort!.order === 'asc' ? 1 : -1;
          return 0;
        });
      }

      setData(filteredData);
    } catch (error) {
      console.error('Error fetching data:', error);
      setData([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial data fetch
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Define table headers with filter options
  const headers: IHeader<CombinedData>[] = [
    { key: 'id', caption: 'ID', width: 80 },
    { 
      key: 'name', 
      caption: 'Name', 
      width: 180,
      filterSelectionOptions: ['Leanne Graham', 'Ervin Howell', 'Clementine Bauch']
    },
    { key: 'username', caption: 'Username', width: 120 },
    { key: 'email', caption: 'Email', width: 200 },
    { key: 'phone', caption: 'Phone', width: 150 },
    { key: 'website', caption: 'Website', width: 120 },
    { 
      key: 'address.city', 
      caption: 'City', 
      width: 120,
      filterSelectionOptions: ['Gwenborough', 'Wisokyburgh', 'McKenziehaven']
    },
    { 
      key: 'company.name', 
      caption: 'Company', 
      width: 150,
      filterSelectionOptions: ['Romaguera-Crona', 'Deckow-Crist', 'Romaguera-Jacobson']
    },
    { 
      key: 'postCount', 
      caption: 'Posts', 
      width: 80,
      renderCell: (item) => (
        <span className="font-semibold text-blue-600">{item.postCount}</span>
      )
    },
  ];

  // Handle filter changes
  const handleFilterChange = useCallback((filterType: 'sort' | 'search' | 'selection' | 'advance', data: unknown) => {
    const newFilters = { ...filters };
    
    if (filterType === 'sort') {
      newFilters.sort = data as { key: string | null; order: TSortOrder };
    } else if (filterType === 'search') {
      newFilters.search = data as Record<string, string>;
    } else if (filterType === 'selection') {
      newFilters.selection = data as Record<string, string[]>;
    } else if (filterType === 'advance') {
      newFilters.advance = data as Record<string, { config_name: TFilterAdvanceConfig; value: string }>;
    }
    
    setFilters(newFilters);
    
    // Only fetch with valid sort key
    const fetchParams = {
      ...newFilters,
      sort: newFilters.sort.key ? { key: newFilters.sort.key, order: newFilters.sort.order } : undefined
    };
    
    fetchData(fetchParams);
  }, [filters, fetchData]);

  return (
    <VirtualTable
      headers={headers}
      data={data}
      rowKey="id"
      headerMode="double"
      rowHeight={32}
      headerHeight={40}
      filterHeight={32}
      isLoading={loading}
      useServerFilter={{
        sort: true,
        search: true,
        selection: true,
        advance: true,
      }}
      onChangeFilter={{
        sort: (key, sortBy) => handleFilterChange('sort', { key, order: sortBy }),
        search: (searchData) => handleFilterChange('search', searchData),
        selection: (selectionData) => handleFilterChange('selection', selectionData),
        advance: (advanceData) => handleFilterChange('advance', advanceData),
      }}
    />
  );
};

export default ServerFilterTable;`,enableServerFilter:`useServerFilter={{
  sort: true,        // Enable server-side sorting
  search: true,      // Enable server-side search
  selection: true,   // Enable server-side selection filter
  advance: true,     // Enable server-side advance filter
}}`,handleFilterChanges:`onChangeFilter={{
  sort: (key, sortBy) => {
    // Handle sorting - make API call with sort parameters
    fetchData({ sort: { key, order: sortBy } });
  },
  search: (searchData) => {
    // Handle search - make API call with search parameters
    fetchData({ search: searchData });
  },
  selection: (selectionData) => {
    // Handle selection filter - make API call with filter parameters
    fetchData({ selection: selectionData });
  },
  advance: (advanceData) => {
    // Handle advance filter - make API call with complex filter parameters
    fetchData({ advance: advanceData });
  },
}}`,serverSideProcessing:`// Example API endpoint logic
app.get('/api/users', (req, res) => {
  const { search, sort, selection, advance } = req.query;
  
  let query = db.users.find();
  
  // Apply search filters
  if (search) {
    Object.entries(search).forEach(([field, value]) => {
      query = query.where(field).contains(value);
    });
  }
  
  // Apply selection filters
  if (selection) {
    Object.entries(selection).forEach(([field, values]) => {
      query = query.where(field).in(values);
    });
  }
  
  // Apply sorting
  if (sort) {
    query = query.orderBy(sort.key, sort.order);
  }
  
  const results = query.exec();
  res.json(results);
});`},F=t=>e.jsx("span",{className:"font-semibold text-blue-600 dark:text-blue-400",children:t.postCount}),D=()=>e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight mb-4",children:"Implementation Guide"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"1. Enable Server Filtering"}),e.jsx("pre",{className:"bg-muted p-3 rounded text-sm overflow-x-auto",children:e.jsx("code",{children:f.enableServerFilter})})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"2. Handle Filter Changes"}),e.jsx("pre",{className:"bg-muted p-3 rounded text-sm overflow-x-auto",children:e.jsx("code",{children:f.handleFilterChanges})})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"3. Server-Side Processing"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-2",children:"In your API endpoint, process the filter parameters:"}),e.jsx("pre",{className:"bg-muted p-3 rounded text-sm overflow-x-auto",children:e.jsx("code",{children:f.serverSideProcessing})})]})]})]}),A=i.memo(D),E=()=>e.jsx("section",{children:e.jsxs("div",{className:"rounded-lg border bg-muted/50 p-6",children:[e.jsx("h3",{className:"font-semibold text-lg mb-2",children:"🚀 Next Steps"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:"Ready to explore more advanced features? Check out these examples:"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(p,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/column-virtualization",children:"Column Virtualization"}),e.jsx(p,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/header-grouping",children:"Header Grouping"})]})]})}),O=i.memo(E),I=()=>{const[t,u]=i.useState([]),[m,c]=i.useState(!1),[o,l]=i.useState({search:{},sort:{key:null,order:"unset"},selection:{},advance:{}}),r=i.useCallback(async()=>{c(!0);try{const s={...o,sort:o.sort.key?{key:o.sort.key,order:o.sort.order}:void 0},a=await V(s);u(a)}catch{u([])}finally{c(!1)}},[o]);i.useEffect(()=>{r()},[r]);const n=i.useCallback((s,a)=>{l(h=>{const d={...h};return s==="sort"?d.sort=a:s==="search"?d.search=a:s==="selection"?d.selection=a:s==="advance"&&(d.advance=a),d})},[]);return{data:t,loading:m,filters:o,handleFilterChange:n}},L=()=>{const[t,u]=i.useState(!1),{data:m,loading:c,handleFilterChange:o}=I(),l=i.useMemo(()=>N().map(n=>n.key==="postCount"?{...n,renderCell:F}:n),[]);return e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Preview"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2",onClick:()=>u(!t),children:t?"Hide Code":"Show Code"})]}),e.jsx("div",{className:"h-96",children:e.jsx(b,{data:m,filterHeight:32,headerHeight:40,headerMode:"double",headers:l,isLoading:c,onChangeFilter:{sort:(r,n)=>o("sort",{key:r,order:n}),search:r=>o("search",r),selection:r=>o("selection",r),advance:r=>o("advance",r)},rowHeight:32,rowKey:"id",useServerFilter:{sort:!0,search:!0,selection:!0,advance:!0}})}),t&&e.jsx(j,{code:f.main,title:"Server Filter Implementation"})]})},P=i.memo(L),R=()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight",children:"Server Filter"}),e.jsx("p",{className:"text-xl text-muted-foreground mt-4",children:"Learn how to implement server-side filtering with Knitto Table using real API data. All filtering, sorting, and searching is handled on the server for optimal performance."})]}),e.jsx(P,{}),e.jsx(k,{}),e.jsx(y,{}),e.jsx(A,{}),e.jsx(O,{})]}),K=i.memo(R);export{K as default};
//# sourceMappingURL=index-DxFWC7Me.js.map
