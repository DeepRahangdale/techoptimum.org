import React, { useEffect } from "react";
import { Flex, Box, Image, chakra, Link } from "@chakra-ui/react";
import AOS from "aos";

export default function TestimonialCard() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const testimonials = [
    {
      name: "Kaushal Kurpad",
      title: "Community Member",
      description:
        "Tech Optimum has the best community for coding. The staff are wonderful and experienced! They will help you with any problem you have. I would recommend Tech Optimum to anyone who wants to learn coding.",
      src: "https://ui-avatars.com/api/?background=72a9ed&color=fff&name=Kaushal+Kurpad&size=100",
    },
    {
      name: "Aditya Sahasranam",
      title: "Community Manager",
      description:
        "Tech Optimum is an incredible organization that is making a real difference in the world. Its commitment to its community, its dedication to providing access to technology and education, and its exceptional team make it a truly special and worthy cause.",
      src: "https://cdn.discordapp.com/attachments/916543942139469884/1057191127016542238/Screen_Shot_2022-12-27_at_12.00.00_AM.png",
    },
  ];
  return (
    <>
      <Flex
        overflow={"none"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        gap={5}
        mb={"120px"}
      >
        {testimonials.map((testimonial, i) => (
          <Box
            key={i}
            w="md"
            py={4}
            px={8}
            bg="#29368C"
            shadow="lg"
            rounded="2xl"
            data-aos="fade-up"
            data-aos-duration={`${i * 1000}`}
            data-aos-delay={`${i * 100}`}
          >
            <Flex
              justifyContent={{
                base: "center",
                md: "end",
              }}
              mt={-16}
            >
              <Image
                w={20}
                h={20}
                fit="cover"
                rounded="full"
                borderStyle="solid"
                borderWidth={3}
                color="brand.500"
                alt="Testimonial avatar"
                src={testimonial.src}
              />
            </Flex>

            <chakra.h2
              color="white"
              fontSize={{
                base: "2xl",
                md: "3xl",
              }}
              mt={{
                base: 2,
                md: 0,
              }}
              fontWeight="bold"
            >
              {testimonial.title}
            </chakra.h2>

            <chakra.p mt={2} color="white">
              <chakra.span fontSize={"20px"} fontWeight={"700"} pr={"3px"}>
                &quot;
              </chakra.span>
              {testimonial.description}
              <chakra.span fontSize={"20px"} fontWeight={"700"} pl={"3px"}>
                &quot;
              </chakra.span>
            </chakra.p>

            <Flex mt={4}>
              <Link fontSize="lg" color="white" pb={"10px"}>
                {testimonial.name}
              </Link>
            </Flex>
          </Box>
        ))}
      </Flex>
    </>
  );
}
