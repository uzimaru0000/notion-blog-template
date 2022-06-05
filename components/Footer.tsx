import { Center, VStack, Link, StackProps, Text } from '@chakra-ui/react';
import { existsGaId } from '../lib/gtag';

export const Footer: React.VFC<StackProps> = (props) => {
  return (
    <VStack
      as="footer"
      bg="gray.100"
      w="full"
      h="10rem"
      justifyContent="center"
      {...props}
    >
      {existsGaId && (
        <Text color="black">
          このサイトではアクセス解析のためにcookieを使用した
          <Link
            href="https://policies.google.com/technologies/partner-sites"
            color="blue.400"
          >
            Google Analytics
          </Link>
          を使用しています。
        </Text>
      )}
      <Center color="black">
        <Text whiteSpace="break-spaces">Made with </Text>
        <Link href="https://github.com/uzimaru0000/notion-blog-template">
          notion-blog-template
        </Link>
      </Center>
    </VStack>
  );
};
