import React, { useState, useEffect } from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO, ABC Inc.',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non feugiat nisi, nec tempus nunc.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Designer, XYZ Co.',
    testimonial:
      'In fermentum magna eu orci facilisis, at scelerisque justo consequat.',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    role: 'Developer, LMN Corp.',
    testimonial: 'Pellentesque eu mi id risus fringilla rhoncus a nec velit.',
  },
];

const TestimonialAutoSlide = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      prev => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonialsData.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(autoSlide);
  }, []);

  const { name, role, testimonial } = testimonialsData[currentTestimonial];

  return (
    <Box py={'10rem'} id="testimonial" className="bg-testi">
      <Box
        p="4"
        shadow="md"
        borderWidth="1px"
        borderRadius="md"
        maxW="600px"
        mx="auto"
        textAlign="center"
        bgColor={'white'}
      >
        <Text fontSize="4xl" fontWeight="bold" mb="4">
          Customer Testimonials
        </Text>
        <Text fontSize="lg" fontStyle="italic" mb="4">
          "{testimonial}"
        </Text>
        <Text fontWeight="bold" mb="2">
          {name}
        </Text>
        <Text>{role}</Text>
        <Box mt="4">
          <Button onClick={prevTestimonial} mr="2">
            &#8249; Prev
          </Button>
          <Button onClick={nextTestimonial} ml="2">
            Next &#8250;
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialAutoSlide;
