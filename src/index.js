import React from "react";
import ReactDOM from "react-dom";

import {
  Appear,
  Box,
  CodePane,
  CodeSpan,
  Deck,
  FlexBox,
  FullScreen,
  Grid,
  Heading,
  Image,
  ListItem,
  Markdown,
  Notes,
  OrderedList,
  Progress,
  Slide,
  SpectacleLogo,
  Stepper,
  Text,
  UnorderedList,
  indentNormalizer,
} from "spectacle";

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen color="black" />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const formidableLogo =
  "https://avatars2.githubusercontent.com/u/5078602?s=280&v=4";

const cppCodeBlock = indentNormalizer(`
#include <iostream>
#include <cstdlib>
#include <sstream>
#include <pthread.h>
struct thread_data_t
{
   int  thread_id;
   std::string message;
};
void *print_thread_message(void *thread_arg)
{
   struct thread_data_t *thread_data;
   thread_data = (struct thread_data_t *) thread_arg;
   cout << "Thread ID: " << thread_data->thread_id;
   cout << "Message: " << thread_data->message << endl;
   pthread_exit(NULL);
}
int main()
{
  pthread_t threads[NUM_THREADS];
  struct thread_data_t thread_data[NUM_THREADS];
  for (int i = 0; i < NUM_THREADS; i++)
  {
    auto curried_add = [](int x) -> function<int(int)> { return [=](int y) { return x + y; }; };
    auto answer = curried_add(i)(5);
    std::stringstream message;
    message << "The math result is " << answer << "!";
    thread_data.thread_id = i;
    thread_data.message = message.str();
    int err = pthread_create(&threads, NULL, print_thread_message, (void *)&thread_data[i]);
    if (err)
    {
      exit(-1)
    }
  }
  return 0;
}`);

const Presentation = () => (
  <Deck theme={theme} template={template} transitionEffect="fade">
    <Slide backgroundColor="#f8f9fa">
      <FlexBox height="100%">
        <Image src="" size={500} />
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" color="#ff5a00">
          Wstęp
        </Heading>
        <Text color="black" textAlign="center">
          Nasza aplikacja służy do zbierania i przetrzymywania feedbacków o
          pracownikach naszej firmy. Feedbacki są zbierane z firm zewnętrznych
          jak i naszej firmy.
        </Text>
      </FlexBox>
    </Slide>
    <Slide backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Technologie
      </Heading>
      <FlexBox
        height="100%"
        flexDirection="row"
        justifyContent="space-around"
        alignItems="start"
      >
        <div>
          <Text color="black">Frontend</Text>
          <UnorderedList>
            <ListItem color="black">
              <CodeSpan>ReactJS</CodeSpan>
            </ListItem>
            <ListItem color="black">
              <CodeSpan>React hooks</CodeSpan>
            </ListItem>
            <ListItem color="black">
              <CodeSpan>Storybook</CodeSpan>
            </ListItem>
            <ListItem color="black">
              <CodeSpan>Fabric-UI</CodeSpan>
            </ListItem>
            <ListItem color="black">
              <CodeSpan>TypeScript</CodeSpan>
            </ListItem>
          </UnorderedList>
        </div>
        <div>
          <Text color="black">Backend</Text>
          <UnorderedList>
            <ListItem color="black">
              <CodeSpan>Nodejs</CodeSpan>
            </ListItem>
            <ListItem color="black">
              <CodeSpan>ExpressJS</CodeSpan>
            </ListItem>
            <ListItem color="black">
              <CodeSpan>PassportJS</CodeSpan>
            </ListItem>
            <ListItem color="black">
              <CodeSpan>NestJS</CodeSpan>
            </ListItem>
          </UnorderedList>
        </div>
      </FlexBox>
    </Slide>
    <Slide backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Główny widok - lista pracowników
      </Heading>
      <FlexBox display="flex" width="100%" justifyContent="space-around">
        <Image src="" size={500} />
        <Box size={500} width={800}>
          <Text textAlign="center" fontSize="20px" color="black">
            Główny widok - lista pracowników
          </Text>
        </Box>
      </FlexBox>
    </Slide>
    <Slide transitionEffect="slide">
      <Heading>Code Blocks</Heading>
      <Stepper
        defaultValue={[]}
        values={[
          [1, 1],
          [23, 25],
          [40, 42],
        ]}
      >
        {(value, step) => (
          <Box position="relative">
            <CodePane
              highlightStart={value[0]}
              highlightEnd={value[1]}
              fontSize={18}
              language="cpp"
              autoFillHeight
            >
              {cppCodeBlock}
            </CodePane>

            <Box
              position="absolute"
              bottom="0rem"
              left="0rem"
              right="0rem"
              bg="black"
            >
              {/* This notes container won't appear for step 0 */}

              {step === 1 && (
                <Text fontSize="1.5rem" margin="0rem">
                  This is a note!
                </Text>
              )}

              {step === 2 && (
                <Text fontSize="1.5rem" margin="0rem">
                  You can use the stepper state to render whatever you like as
                  you step through the code.
                </Text>
              )}
            </Box>
          </Box>
        )}
      </Stepper>
      <Text>
        Code Blocks now auto size and scroll when there is an overflow of
        content! They also auto-wrap longer lines.
      </Text>
    </Slide>
    <Slide>
      <Heading>Animated Elements</Heading>
      <OrderedList>
        <Appear elementNum={0}>
          <ListItem>Elements can animate in!</ListItem>
        </Appear>
        <Appear elementNum={2}>
          <ListItem>
            Just identify the order with the prop{" "}
            <CodeSpan>elementNum</CodeSpan>!
          </ListItem>
        </Appear>
        <Appear elementNum={1}>
          <ListItem>Out of order</ListItem>
        </Appear>
      </OrderedList>
    </Slide>
    <Slide>
      <FlexBox>
        <Text>These</Text>
        <Text>Text</Text>
        <Text color="secondary">Items</Text>
        <Text fontWeight="bold">Flex</Text>
      </FlexBox>
      <Grid gridTemplateColumns="1fr 2fr" gridColumnGap={15}>
        <Box backgroundColor="primary">
          <Text color="secondary">Single-size Grid Item</Text>
        </Box>
        <Box backgroundColor="secondary">
          <Text>Double-size Grid Item</Text>
        </Box>
      </Grid>
      <Grid
        gridTemplateColumns="1fr 1fr 1fr"
        gridTemplateRows="1fr 1fr 1fr"
        alignItems="center"
        justifyContent="center"
        gridRowGap={1}
      >
        {Array(9)
          .fill("")
          .map((_, index) => (
            <FlexBox paddingTop={0} key={`formidable-logo-${index}`} flex={1}>
              <Image src={formidableLogo} width={100} />
            </FlexBox>
          ))}
      </Grid>
    </Slide>
    <Slide>
      <Markdown>
        {`
          # Layout Tables in Markdown
          | Browser         | Supported | Versions |
          |-----------------|-----------|----------|
          | Chrome          | Yes       | Last 2   |
          | Firefox         | Yes       | Last 2   |
          | Opera           | Yes       | Last 2   |
          | Edge (EdgeHTML) | No        |          |
          | IE 11           | No        |          |
        `}
      </Markdown>
    </Slide>
    <Markdown containsSlides>
      {`
        ### Even write multiple slides in Markdown
        > Wonderfully formatted quotes
        1. Even create
        2. Lists in Markdown
        - Or Unordered Lists
        - Too!!
        Notes: These are notes
        ---
        ### This slide was also generated in Markdown!
        \`\`\`jsx
        const evenCooler = "is that you can do code in Markdown";
        // You can even specify the syntax type!
        \`\`\`
        ### A slide can have multiple code blocks too.
        \`\`\`c
        char[] someString = "Popular languages like C too!";
        \`\`\`
        Notes: These are more notes
      `}
    </Markdown>
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById("root"));
