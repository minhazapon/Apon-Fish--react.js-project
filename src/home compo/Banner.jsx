


const Banner = () => {
    return (
        <div className=" ml-5 mr-5 mb-10 rounded-xl mt-10 bg-no-repeat bg-cover p-24 " style={{
            backgroundImage: "url(  https://img.freepik.com/premium-photo/lake-fishing-bucket-hat_1237301-32054.jpg?w=740  )",
          }}  >
            <div>
              
            <div className="  bg-gradient-to-r from-black  text-white p-10">
             
            <div>
                <p className="  text-center text-3xl font-serif">"Fishing is much more than fish.<br></br> It is the great occasion when we may return to the fine simplicity of our forefathers." </p>
             </div>

             <div className=" mt-5">
                <p className=" text-xl text-center">A fish market is a marketplace dedicated to the sale of fish and seafood.<br></br> They can range from small local markets to large,<br></br> bustling marketplaces in major cities. Here's an overview of fish markets, their history, and their significance</p>
             </div>


            </div>
             


             <div className=" flex-col md:flex-row flex justify-center items-center mt-5 gap-5">


             <div className="card card-compact bg-base-100 w-[300px] h-[300px] shadow-xl">
              <figure>
                <img className=" "
                  src="https://img.freepik.com/premium-psd/hot-healthy-delicious-fresh-sea-fish-banner-social-media-post-aigenerated_600260-3721.jpg?w=740"
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Atlantic Salmon</h2>
                <p>Price: 100$</p>
               
              </div>
            </div>


             <div className="card card-compact bg-base-100 w-[300px] h-[300px] shadow-xl">
              <figure>
                <img className=" "
                  src="https://img.freepik.com/premium-vector/fish-social-media-post-web-banner-organic-promotional-posttemplate-premium-vector-design_600260-19.jpg?w=740"
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Albacore Tuna</h2>
                <p>Price: 100$</p>
               
              </div>
            </div>


             <div className="card card-compact bg-base-100 w-[300px] h-[300px] shadow-xl">
              <figure>
                <img className=" "
                  src="https://img.freepik.com/premium-psd/healthy-delicious-fresh-sea-fish-with-exploding-salad-banner-social-media-post-ai-generated_600260-4386.jpg?w=740"
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Red Snapper</h2>
                <p>Price: 100$</p>
               
              </div>
            </div>




             </div>
















            </div>
            
        </div>
    );
};

export default Banner;