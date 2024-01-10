import { EditIcon, ViewIcon } from "@chakra-ui/icons"
import { 
  Box, 
  SimpleGrid,
  Text,
  Flex,
  Heading,
  Card, 
  CardHeader,
  CardBody,
  CardFooter,
  HStack,
  Divider,
  Button,
  Avatar
} from "@chakra-ui/react"
import { tasks} from "../data/db"
import { useColorModeValue } from "@chakra-ui/color-mode"

export default function Dashboard() {
    const cardTopBorderColor = useColorModeValue("purple.400", "purple.600");
    const cardBGColor = useColorModeValue("white", "gray.700");
    const dividerColor = useColorModeValue("gray.300", "gray.400");

  return (
    <SimpleGrid spacing={10} minChildWidth={300}>
      {tasks && tasks.map(task => (
        <Card key={task.id} borderTop="8px" borderColor={cardTopBorderColor} bg={cardBGColor}>

          <CardHeader>
            <Flex gap={5}>
              <Box w="50px" h="50px">
              <Avatar name={task.author} src={task.img} />
              </Box>
              <Box>
                <Heading as="h3" size="sm">{task.title}</Heading>
                <Text>by {task.author}</Text>
              </Box>
            </Flex>
          </CardHeader>

          <CardBody>
            <Text>{task.description}</Text>
          </CardBody>

          <Divider borderColor={dividerColor} />

          <CardFooter>
            <HStack>
              <Button variant="ghost" leftIcon={<ViewIcon />}>Watch</Button>
              <Button variant="ghost" leftIcon={<EditIcon />}>Comment</Button>
            </HStack>
          </CardFooter>

        </Card>
      ))}
    </SimpleGrid>
  )
}

