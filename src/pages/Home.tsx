import Card from "../components/Card";

interface HomeProps {
    items: any[];
    onAddToFavorite: (item: any) => void;
}

const Home: React.FC<HomeProps> = ({ items, onAddToFavorite }) => { 
    console.log("Home ", items);

    return (
        <div className="main">
            <div className="title-search">
                <h1 className="title">Все кроссовки</h1>
                <div className="search-box">
                    Search 
                </div>
            </div>

            <div className="grid">
                {items.map(item => (
                    <Card key={item.id} item={item} onAddToFavorite={onAddToFavorite} />
                ))}  

                 {/* <Card item={{name: 'dddd', id:444}}/>  */} 
            </div>
        </div>
    );
};

export default Home;
