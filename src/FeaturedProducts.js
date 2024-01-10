import React from 'react'
import ProductContext from './ProductContext'
import Card from 'react-bootstrap/Card'
import styles from './FeaturedProducts.module.css'
import { ListGroup } from 'react-bootstrap'

function FeaturedProducts() {


    function features(products) {
        if (products === null) return
        return (
        <div className={styles.cardContainer}>
    {products.slice(0,3).map((products) =>(
    <ListGroup.Item key={products.id} className={styles.card}>
    <img variant="top" src={products.imageUrl} alt="" className={styles.image}/>
    
    <p>{products.name}</p>
    <p>${products.price}</p>
    
    </ListGroup.Item>  
         ))}
        </div>
        )
    }
    
    return(
        <>
     <h3>Featured Products</h3>   
     <Card className="mb-3" >
      <ProductContext.Consumer>
        {({products}) => 
        features(products)
        }
      </ProductContext.Consumer>
      </Card>
      
    
    </>
    )
}

export default FeaturedProducts