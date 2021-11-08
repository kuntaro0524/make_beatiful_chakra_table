import {
  Box,
  Button,
  ChakraProvider,
  Editable,
  EditableInput,
  EditablePreview,
  useEditableControls
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption
} from "@chakra-ui/react";
// import "./styles.css";

export default function App() {
  const onClickText = () => {
    alert("pushed!");
  };
  return (
    <ChakraProvider>
      <div className="App">
        <Button colorScheme="blue">Fuck you</Button>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td onClick={onClickText}>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>
                <Editable defaultValue="25.0">
                  <EditablePreview />
                  <EditableInput />
                </Editable>
              </Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>{" "}
      </div>
    </ChakraProvider>
  );
}
