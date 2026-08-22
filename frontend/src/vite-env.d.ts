declare module 'react' { export function useState<T=any>(initial:T):any; export function useMemo<T=any>(factory:()=>T,deps:any[]):T; const React:any; export default React; }
declare module 'react-dom/client' { export const createRoot:any; }
declare module 'react/jsx-runtime' { export const jsx:any; export const jsxs:any; export const Fragment:any; }
declare module '*.css';
declare namespace JSX { interface IntrinsicElements { [elemName:string]: any } }
