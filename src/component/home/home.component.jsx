
import face from '../../assets/923c393aa64a931bd3d05ae8c26374e7.jpeg'
import "./home.styles.scss"



const Home = () => {
    return(
        <div className="Home">
         <div>
         <h1>Orlando Blagrove
         </h1>
         <p>Be Better than you were yesterday</p>
        <button>Contact Me</button>
         </div>
         <div><img src={face} alt='face'/></div>
        </div>
    )
} 

export default Home;