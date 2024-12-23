import FaqCard from "./faqCard"
const FAQSection = () => {
  const faq=[
    {
      description:"We do not Fee at any export",
      icon:"+",
      explanation:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero felis, semper at turpis vel, pellentesque congue lectus. Integer vitae condimentum ipsum. Mauris vel convallis mauris."
    },
    {
        description:"We connect various farmers to market",
        icon:"+",
        explanation:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero felis, semper at turpis vel, pellentesque congue lectus. Integer vitae condimentum ipsum. Mauris vel convallis mauris."
      },{
        description:"We help in expanding the ugandan culture",
        icon:"+",
        explanation:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero felis, semper at turpis vel, pellentesque congue lectus. Integer vitae condimentum ipsum. Mauris vel convallis mauris."
      },{
        description:"We help in making ugandan products have market",
        icon:"+",
        explanation:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero felis, semper at turpis vel, pellentesque congue lectus. Integer vitae condimentum ipsum. Mauris vel convallis mauris."
      },{
        description:"We use modern way of e-commercing",
        icon:"+",
        explanation:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero felis, semper at turpis vel, pellentesque congue lectus. Integer vitae condimentum ipsum. Mauris vel convallis mauris."
      },
    
  ]
  return (
    <section className="py-16">
      <div className="container mx-auto flex flex-col gap-10 items-center">
      
         <div className=" flex flex-col gap-10 ">
          {
            faq.map((item,index)=>(
              <FaqCard key={index} description={item.description} icon={item.icon} explanation={item.explanation} />
            ))
          }

         </div>

      </div>
    </section>
  )
}

export default FAQSection