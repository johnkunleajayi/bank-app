import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation

export default function ExpenseView({ type, data }) {
  return (
    <Box
      flex={1}
      w={"full"}
      bg={"white"}
      mr={"4"}
      mt={"10"}
      p={"5"}
      pb={"4"}
      border={"1px solid"}
      borderColor={"gray.100"}
      borderRadius={"12"}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Heading size={"md"} color={"red.700"}>
          {type === "income" ? "Credit" : "Debit"}
        </Heading>
      </Flex>
      {data.map((item, index) => (
        <Flex
          key={index} // Ensure each item has a unique key
          bg={type === "expense" ? "red.50" : "blue.50"}
          mt={"4"}
          justifyContent={"space-between"}
          alignItems={"center"}
          border={"1px solid"}
          borderColor={type === "expense" ? "red.100" : "blue.100"}
          p={"4"}
          borderRadius={"8"}
        >
          <Flex alignItems={"center"} justifyContent={"center"}>
            <Text ml={"3"} fontWeight={"bold"} color={"gray.600"}>
              {item.description}
            </Text>
          </Flex>
          <Text>$ {item.amount}</Text>
        </Flex>
      ))}
    </Box>
  );
}

// Add prop types validation
ExpenseView.propTypes = {
  type: PropTypes.oneOf(["income", "expense"]).isRequired, // Validate that type is either "income" or "expense"
  data: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired, // Validate that description is a required string
      amount: PropTypes.number.isRequired, // Validate that amount is a required number
    })
  ).isRequired, // Validate that data is a required array of objects
};
