import { Seo } from "@/ui/components/seo/seo";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import { RiUser6Fill } from "react-icons/ri";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Logo } from "@/ui/design-system/logo/logo";
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Container } from "@/ui/components/container/container";

export default function Home() {
  return (
    <>
      <Seo title="Bakery & Diabetes" description="Description.ebu." />


      <Container className="py-10 space-y-10">

        {/* Typography */}
        <div className="space-y-2">
          <Typography variant="caption2" weight="medium">
              Typography
          </Typography>
          <div className="flex flex-col gap-2 p-5 border border-gray-400 divide-y-2 divide-gray-400 rounded">
              <div className="py-5 space-y-2">
                <Typography variant="caption3" weight="medium">
                    Display
                </Typography>
                <Typography variant="display">Nothing is impossible</Typography>
              </div>

              <div className="py-5 space-y-2">
                <Typography variant="caption3" weight="medium">
                    H1
                </Typography>
                <Typography variant="h1">
                    Nothing is impossible, the word itself says, I’m possible!
                </Typography>
              </div>

              <div className="py-5 space-y-2">
                <Typography variant="caption3" weight="medium">
                    H2
                </Typography>
                <Typography variant="h2">
                    Your time is limited, so don’t waste it living someone else’s
                    life
                </Typography>
              </div>

              <div className="py-5 space-y-2">
                <Typography variant="caption3" weight="medium">
                    H2
                </Typography>
                <Typography variant="h3">
                    Daily Report: Removing Checks to the Power of the Internet
                    Titans
                </Typography>
              </div>

              <div className="py-5 space-y-2">
                <Typography variant="caption3" weight="medium">
                    H2
                </Typography>
                <Typography variant="h4">
                    Daily Report: Removing Checks to the Power of the Internet
                    Titans
                </Typography>
              </div>

              <div className="py-5 space-y-2">
                <Typography variant="caption3" weight="medium">
                    H2
                </Typography>
                <Typography variant="h5">
                    Daily Report: Removing Checks to the Power of the Internet
                    Titans
                </Typography>
              </div>

              <div className="py-5 space-y-2">
                <Typography variant="caption3" weight="medium">
                    Lead
                </Typography>
                <Typography variant="lead">
                    Nothing is impossible, the word itself says, I’m possible!
                </Typography>
                <Typography variant="lead" weight="medium">
                    Nothing is impossible, the word itself says, I’m possible!
                </Typography>
                <Typography variant="lead" weight="bold">
                    Nothing is impossible, the word itself says, I’m possible!
                </Typography>
              </div>

              <div className="py-5 space-y-2">
                <Typography variant="caption3" weight="medium">
                    Body lg
                </Typography>
                <Typography variant="body-lg">
                    When I was 5 years old, my mother always told me that happiness
                    was the key to life. When I went to school, they asked me what I
                    wanted to be when I grew up.
                </Typography>
              </div>

              <div className="py-5 space-y-2">
                <Typography variant="caption3" weight="medium">
                    Body base
                </Typography>
                <Typography variant="body-base">
                    When I was 5 years old, my mother always told me that happiness
                    was the key to life. When I went to school, they asked me what I
                    wanted to be when I grew up.
                </Typography>
              </div>

              <div className="py-5 space-y-2">
                <Typography variant="caption3" weight="medium">
                    Body sm
                </Typography>
                <Typography variant="body-sm">
                    When I was 5 years old, my mother always told me that happiness
                    was the key to life. When I went to school, they asked me what I
                    wanted to be when I grew up.
                </Typography>
              </div>


              <div className="flex items-start divide-x-2 divide-gray-400 gap-7">

                <div className="py-5 space-y-2 pl-7 first:pl-0">
                    <Typography variant="caption3" weight="medium">
                        Caption 1
                    </Typography>
                    <Typography variant="caption1">
                        Regular
                    </Typography>
                    <Typography variant="caption1" weight="medium">
                        Medium
                    </Typography>
                </div>

                <div className="py-5 space-y-2 pl-7 first:pl-0">
                    <Typography variant="caption3" weight="medium">
                        Caption 2
                    </Typography>
                    <Typography variant="caption2">
                        Regular
                    </Typography>
                    <Typography variant="caption2" weight="medium">
                        Medium
                    </Typography>
                </div>

                <div className="py-5 space-y-2 pl-7">
                    <Typography variant="caption3" weight="medium">
                        Caption 3
                    </Typography>
                    <Typography variant="caption3">
                        Regular
                    </Typography>
                    <Typography variant="caption3" weight="medium">
                        Medium
                    </Typography>
                </div>

                <div className="h-full pt-5 space-y-2 pl-7">
                    <Typography variant="caption3" weight="medium">
                        Caption 4
                    </Typography>
                    <Typography variant="caption4">
                        Regular
                    </Typography>
                    <Typography variant="caption4" weight="medium">
                        Medium
                    </Typography>
                </div>

              </div>

          </div>
        </div>

        <div className="flex items-start gap-7">

          {/* Spinners */}
          <div className="space-y-2">
              <Typography variant="caption2" weight="medium">
                Spinners
              </Typography>
              <div className="flex items-center gap-4 p-5 border border-gray-400 rounded">
                <Spinner size="small" />
                <Spinner />
                <Spinner size="large" />
              </div>
          </div>

          {/* Avatar */}
          <div className="space-y-2">
            <Typography variant="caption2" weight="medium">
              Avatar
            </Typography>
            <div className="flex items-center gap-4 p-5 border border-gray-400 rounded">
              <Avatar size="small" src="/assets/images/avatar.png" alt="avatar" />
              <Avatar src="/assets/images/avatar.png" alt="avatar" />
              <Avatar size="large" src="/assets/images/avatar.png" alt="avatar" />
            </div>
          </div>

          {/* Logo */}
          <div className="space-y-2">
            <Typography variant="caption2" weight="medium">
              Logo
            </Typography>
            <div className="flex items-center gap-4 p-5 border border-gray-400 rounded">
              <Logo size="very-small" />
              <Logo size="small" />
              <Logo />
              <Logo size="large" />
            </div>
          </div>

          


        </div>
        

        {/* Buttons */}
        <div className="space-y-2">
          <Typography variant="caption2" weight="medium">
              Buttons
          </Typography>

          <div className="p-5 space-y-8 border border-gray-400 rounded">
            
            <div className="space-y-2">

              {/* Small */}
              <Typography variant="caption3" weight="medium">
                  Small
              </Typography>

              <div className="space-y-4">

                {/* IsLoading */}
                <div className="flex items-center gap-2">
                  <Button isLoading size="small">
                      primary
                  </Button>
                  <Button isLoading size="small" variant="secondary">
                      secondary
                  </Button>
                  <Button
                      isLoading
                      size="small"
                      variant="ico"
                      icon={{ icon: RiUser6Fill }}
                  />
                  <Button
                      isLoading
                      size="small"
                      variant="ico"
                      icon={{ icon: RiUser6Fill }}
                      iconTheme="secondary"
                  />
                  <Button isLoading size="small" variant="disabled" disabled>
                      disabled
                  </Button>
                </div>

                {/* normal */}
                <div className="flex items-center gap-2">
                  <Button size="small">
                      primary
                  </Button>
                  <Button size="small" icon={{ icon: BsArrowRight }}>
                      primary
                  </Button>
                  <Button size="small" variant="secondary">
                      secondary
                  </Button>
                  <Button 
                    size="small" 
                    variant="secondary" 
                    icon={{ icon: BsArrowLeft }}
                    iconPosition="left"
                  >
                      secondary
                  </Button>
                  <Button 
                    size="small" 
                    variant="secondary" 
                    icon={{ icon: BsArrowRight }}
                  >
                      secondary
                  </Button>
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
                  <Button size="small" variant="disabled" disabled>
                      disabled
                  </Button>
                </div>

              </div>
            </div>

            <div className="space-y-2">

              {/* Medium */}
              <Typography variant="caption3" weight="medium">
                  Medium
              </Typography>

              <div className="space-y-4">

                {/* IsLoading */}
                <div className="flex items-center gap-2">
                  <Button isLoading>
                      primary
                  </Button>
                  <Button isLoading variant="secondary">
                      secondary
                  </Button>
                  <Button
                      isLoading
                      variant="ico"
                      icon={{ icon: RiUser6Fill }}
                  />
                  <Button
                      isLoading
                      variant="ico"
                      icon={{ icon: RiUser6Fill }}
                      iconTheme="secondary"
                  />
                  <Button isLoading variant="disabled" disabled>
                      disabled
                  </Button>
                </div>

                {/* normal */}
                <div className="flex items-center gap-2">
                  <Button>
                      primary
                  </Button>
                  <Button icon={{ icon: BsArrowRight }}>
                      primary
                  </Button>
                  <Button variant="secondary">
                      secondary
                  </Button>
                  <Button 
                    variant="secondary" 
                    icon={{ icon: BsArrowLeft }}
                    iconPosition="left"
                  >
                      secondary
                  </Button>
                  <Button 
                    variant="secondary" 
                    icon={{ icon: BsArrowRight }}
                    iconPosition="right"
                  >
                      secondary
                  </Button>
                  <Button
                      variant="ico"
                      icon={{ icon: RiUser6Fill }}
                  />
                  <Button
                      variant="ico"
                      icon={{ icon: RiUser6Fill }}
                      iconTheme="secondary"
                  />
                  <Button variant="disabled" disabled>
                      disabled
                  </Button>
                </div>

              </div>
            </div>

            <div className="space-y-2">

              {/* Large */}
              <Typography variant="caption3" weight="medium">
                  Large
              </Typography>

              <div className="space-y-4">

                {/* IsLoading */}
                <div className="flex items-center gap-2">
                  <Button isLoading size="large">
                      primary
                  </Button>
                  <Button isLoading size="large" variant="secondary">
                      secondary
                  </Button>
                  <Button
                      isLoading
                      size="large"
                      variant="ico"
                      icon={{ icon: RiUser6Fill }}
                  />
                  <Button
                      isLoading
                      size="large"
                      variant="ico"
                      icon={{ icon: RiUser6Fill }}
                      iconTheme="secondary"
                  />
                  <Button isLoading size="large" variant="disabled" disabled>
                      disabled
                  </Button>
                </div>

                {/* normal */}
                <div className="flex items-center gap-2">
                  <Button size="large">
                      primary
                  </Button>
                  <Button size="large" icon={{ icon: BsArrowRight }}>
                      primary
                  </Button>
                  <Button size="large" variant="secondary">
                      secondary
                  </Button>
                  <Button 
                    size="large" 
                    variant="secondary" 
                    icon={{ icon: BsArrowLeft }}
                    iconPosition="left"
                  >
                      secondary
                  </Button>
                  <Button 
                    size="large" 
                    variant="secondary" 
                    icon={{ icon: BsArrowRight }}
                    iconPosition="right"
                  >
                      secondary
                  </Button>
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
                  <Button size="large" variant="disabled" disabled>
                      disabled
                  </Button>
                </div>

              </div>
            </div>

          </div>
        </div>

      </Container>
      

    </>
  );
}
