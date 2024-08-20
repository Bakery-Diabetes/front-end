import { Seo } from "@/ui/components/seo";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import { RiUser6Fill } from "react-icons/ri";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <Seo title="Bakery & Diabetes" description="Description.ebu." />

      <div className="flex items-center gap-4 p-10">
        <Button size="small">Accent</Button>
        <Button size="small" icon={{ icon: BsArrowLeft }} iconPosition="left">Accent</Button>
        <Button size="small" icon={{ icon: BsArrowRight }} iconPosition="right">Accent</Button>
        <Button size="small" variant="secondary">Secondary</Button>
        <Button size="small" variant="secondary" icon={{ icon: BsArrowLeft }} iconPosition="left">Secondary</Button>
        <Button size="small" variant="secondary" icon={{ icon: BsArrowRight }} iconPosition="right">Secondary</Button>
        <Button size="small" variant="disabled" disabled>Disabled</Button>  
        <Button 
          size="small" 
          variant="ico" 
          icon={{ icon: RiUser6Fill }} 
        />
        <Button 
          size="small" 
          variant="ico" 
          icon={{ icon: RiUser6Fill }}
          iconTheme="secondary" 
        />
        <Button 
          size="small" 
          variant="ico" 
          icon={{ icon: RiUser6Fill }}
          iconTheme="gray"
        />
      </div>

      <div className="flex items-center gap-4 p-10">
        <Button>Accent</Button>
        <Button icon={{ icon: BsArrowLeft }} iconPosition="left">Accent</Button>
        <Button icon={{ icon: BsArrowRight }} iconPosition="right">Accent</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary" icon={{ icon: BsArrowLeft }} iconPosition="left">Secondary</Button>
        <Button variant="secondary" icon={{ icon: BsArrowRight }} iconPosition="right">Secondary</Button>
        <Button variant="disabled" disabled>Disabled</Button>  
        <Button 
          variant="ico" 
          icon={{ icon: RiUser6Fill }} 
        />
        <Button 
          variant="ico" 
          icon={{ icon: RiUser6Fill }}
          iconTheme="secondary"
        />
        <Button 
          variant="ico" 
          icon={{ icon: RiUser6Fill }}
          iconTheme="gray"
        />
      </div>

      <div className="flex items-center gap-4 p-10">
        <Button size="large">Accent</Button>
        <Button size="large" icon={{ icon: BsArrowLeft }} iconPosition="left">Accent</Button>
        <Button size="large" icon={{ icon: BsArrowRight }} iconPosition="right">Accent</Button>
        <Button size="large" variant="secondary">Secondary</Button>
        <Button size="large" variant="secondary" icon={{ icon: BsArrowLeft }} iconPosition="left">Secondary</Button>
        <Button size="large" variant="secondary" icon={{ icon: BsArrowRight }} iconPosition="right">Secondary</Button>
        <Button size="large" variant="disabled" disabled>Disabled</Button>
        <Button 
          size="large" 
          variant="ico" 
          icon={{ icon: RiUser6Fill }} 
        />  
        <Button 
          size="large" 
          variant="ico" 
          icon={{ icon: RiUser6Fill }} 
          iconTheme="secondary"
        />  
        <Button 
          size="large" 
          variant="ico" 
          icon={{ icon: RiUser6Fill }} 
          iconTheme="gray"
        />  
      </div>
      

      {/* <div className="space-y-5">
        <Typography theme="primary" variant="display" component="div">
          Bakery & Diabetes
        </Typography>
        <Typography theme="secondary" variant="h1" component="div">
          Bakery & Diabetes
        </Typography>
        <Typography theme="black" variant="h2" component="div">
          Bakery & Diabetes
        </Typography>
        <Typography theme="gray" variant="h3" component="div">
          Bakery & Diabetes
        </Typography>
        <Typography theme="white" variant="h4" component="div">
          Bakery & Diabetes
        </Typography>
        <Typography variant="h5" component="div">
          Bakery & Diabetes
        </Typography>
        <Typography variant="h6" component="div">
          Bakery & Diabetes
        </Typography>
        <Typography variant="lead" component="div">
          Bakery & Diabetes
        </Typography>
        <Typography variant="body-sm" component="div">
          Bakery & Diabetes
        </Typography>
        <Typography variant="caption1" component="div">
          Bakery & Diabetes
        </Typography>
        <Typography variant="caption2" component="div">
          Bakery & Diabetes
        </Typography>
        <Typography variant="caption3" component="div">
          Bakery & Diabetes
        </Typography>
        <Typography variant="caption4" component="div">
          Bakery & Diabetes
        </Typography>
      </div> */}
      
    </>
  );
}
