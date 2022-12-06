import React, { useState } from "react"
import styles from "./Product.module.css"

function Product () {

    const [status, setStatus] = useState("Добавить в корзину")
    const [style, setStyle] = useState(styles.btnBuy)
    const [del, setDel] = useState("")
    const [delStyle, setDelStyle] = useState("")

    function buy () {
        let text = "Уже в корзине"
        setStyle(styles.btnActive)
        setStatus(text)
        setDel("Удалить из корзины")
        setDelStyle(styles.delete)
    }

    return (
        <div className={styles.product}>
            <img className={styles.img} src={require("../img/img-1.jpeg")} alt="" />
            <div className={styles.info}>
                <div className={styles.namePrice}>
                    <div className={styles.name}>Nike Sneaker</div>
                    <div className={styles.price}>120$</div>
                </div>
                <button className={styles.button}>Детали</button>
            </div>
            <hr className={styles.line}/>
            <div className={styles.action}>
                <div className={styles.about}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam deserunt!</div>
                <div className={styles.buy}>
                    <button className={style} onClick={() => buy()}>{status}</button>
                    <div onClick={() => buy()} className={delStyle}>{del}</div>
                </div>
                
            </div>
        </div>
    )
}

export default Product