import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";
import { Tooltip } from "@heroui/react";
import { Link } from "@heroui/react";
export default function DrawerApp() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Tooltip content="About">
        <Button
          isIconOnly
          aria-label="Info"
          className="bg-gray-600"
          radius="full"
          onPress={onOpen}
        >
          <img src="/info_white.svg" alt="info" className="w-16 h-16" />
        </Button>
      </Tooltip>
      <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                FundAssist : AI-Powered Mutual Fund Chatbot
              </DrawerHeader>
              <DrawerBody>
                <p>
                  FundAssist-AI is an advanced AI-powered chatbot designed to
                  provide insights, recommendations, and assistance related to
                  mutual funds. Built using Python, Flask, and LangChain, it
                  leverages LLMs like DeepSeek-R1, vector storage (FAISS), and
                  Retrieval-Augmented Generation (RAG) to deliver accurate and
                  context-aware responses to user queries.
                </p>
                <p className="font-bold">Key Features -</p>
                <ul>
                  <li>* LLM-Powered Query Processing (DeepSeek-R1)</li>
                  <li>
                    * Uses DeepSeek-R1, a powerful large language model (LLM),
                    to understand and generate responses to complex financial
                    queries.
                  </li>
                  <li>
                    * Natural Language Processing (NLP) for Mutual Fund Queries
                  </li>
                  <li>
                    * Retrieval-Augmented Generation (RAG) for Enhanced Accuracy
                  </li>
                  <li>
                    * Uses LangChain's RetrievalQA to fetch relevant information
                    from large datasets before generating responses.
                  </li>
                  <li>
                    * Reduces the risk of hallucinated responses by grounding
                    answers in factual data.
                  </li>
                  <li>
                    * Efficient Vector-Based Search Using FAISS FAISS (Facebook
                    AI Similarity Search) enables fast and scalable vector
                    search. Stores and retrieves financial knowledge
                    efficiently, ensuring quick responses.
                  </li>
                  <li>* Flask-Powered API for Seamless Integration</li>
                </ul>
                <Table aria-label="Example static collection table">
                  <TableHeader>
                    <TableColumn>COMPONENTS</TableColumn>
                    <TableColumn>TECHNOLOGY USED</TableColumn>
                  </TableHeader>
                  <TableBody>
                    <TableRow key="1">
                      <TableCell>Backend</TableCell>
                      <TableCell>Python, Flask</TableCell>
                    </TableRow>
                    <TableRow key="1">
                      <TableCell>LLM/NLP</TableCell>
                      <TableCell>DeepSeek-R1 (LLM), LangChain</TableCell>
                    </TableRow>
                    <TableRow key="1">
                      <TableCell>Vector Search</TableCell>
                      <TableCell>FAISS</TableCell>
                    </TableRow>
                    <TableRow key="1">
                      <TableCell>Frontend</TableCell>
                      <TableCell>React, TypeScript</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </DrawerBody>
              <DrawerFooter>
                <Button
                  className="bg-rose-500"
                  variant="solid"
                  onPress={onClose}
                >
                  Close
                </Button>
                <Link
                  isBlock
                  showAnchorIcon
                  color="foreground"
                  href="https://portfolio-ms0031.netlify.app/"
                >
                  Portfolio
                </Link>
                <Link
                  isBlock
                  showAnchorIcon
                  color="foreground"
                  href="https://www.linkedin.com/in/ms0031/"
                >
                  LinkedIn
                </Link>
                <Link
                  isBlock
                  showAnchorIcon
                  color="foreground"
                  href="https://github.com/ms0031/"
                >
                  GitHub
                </Link>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
