export const Card = ({ imageUrl, cardText }) => {

return ( 
    <div className="card" style={{ width: "18rem" }}>
        <img className src={ imageUrl } alt="..."/>
        <div className="card-body">
             <p className={ cardText }>Some quick example text...</p>
        </div>
    </div>
 );
};