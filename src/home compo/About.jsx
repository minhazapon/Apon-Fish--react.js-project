


const About = () => {
    return (
        <div className=" ml-5 mr-5 mt-10 mb-10">

            <div  className=" flex justify-center items-center gap-20 flex-col md:flex-row">

            <div>

              <img className=" h-[400px] rounded-xl" src="https://i.ibb.co/x2MPCPK/two-men-canoeing-sunset-back-lit-adventure-generated-by-ai-1270515-10114.jpg" alt="" />

              <img className=" h-[200px] w-[300px] rounded-xl border-[5px]  border-blue-400  ml-40 -mt-24 " src="https://img.freepik.com/premium-photo/fisherman-with-fishing-rod-boat-autumn-lake-generative-ai_634053-2912.jpg?w=740" alt="" />

            </div> 


            <div>

             <h1 className=" text-2xl font-serif">About Us</h1>

             <p className=" mt-5 text-6xl font-serif">Explore Your<br></br> <span className=" text-blue-500">Fishing Goal</span> With Us</p>

             <p className=" mt-5 text-xl text-slate-500">Lorem ipsum, dolor sit amet consectetur <br></br>adipisicing elit. Laboriosam minima libero<br></br> possimus omnis et dicta ratione ex nisi, fuga voluptatem<br></br> aspernatur ea odio facere minus dolorem <br></br>consectetur repudiandae blanditiis beatae.</p>


             <div className=" flex items-center gap-5 mt-3">
                <img className=" h-[50px]" src="https://i.ibb.co/mDK1W7w/fishermen.png" alt="" />
                <p className=" text-2xl font-serif">Fishing Tournament</p>
             </div>
             <div className=" flex items-center gap-5 mt-3">
                <img className=" h-[50px]" src="https://i.ibb.co/VvCSzGg/rod.png" alt="" />
                <p className=" text-2xl font-serif">Free Fishing Day</p>
             </div>

             <button className=" mt-5 btn bg-blue-600 text-white ">Discover More</button>

            </div>













            </div>
            
        </div>
    );
};

export default About;