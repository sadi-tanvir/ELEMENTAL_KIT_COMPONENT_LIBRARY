
const DocsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <h1 className='text-5xl p-20 text-red-500'>From Docs Layout</h1>
            {children}
        </>
    );
};

export default DocsLayout;