import React from 'react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';

const Login: React.FC = () => {
    return (
        <Flex minH={'100vh'} align={'center'} justify={'center'}>
            <Stack spacing={8} mx={'auto'} minW={'xl'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Log in to your account</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of cool <Link color={'teal.300'}>features</Link> ✌️
                    </Text>
                </Stack>
                <Box
                    color='white'
                    rounded={'lg'}
                    bg={useColorModeValue('#1d2334', 'gray.700')}
                    boxShadow={'dark-lg'}
                    p={8}
                >
                    <Stack spacing={4}>
                        <FormControl id='email'>
                            <FormLabel>Email address</FormLabel>
                            <Input type='email' />
                        </FormControl>

                        <FormControl id='password'>
                            <FormLabel>Password</FormLabel>
                            <Input type='password' />
                        </FormControl>

                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}
                            >
                                <Checkbox>Remember me</Checkbox>
                                <Link href='/register' color={'teal.300'}>
                                    Not registed?
                                </Link>
                            </Stack>
                            <Stack spacing={5}>
                                <Button
                                    bg={'teal'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'teal.500',
                                    }}
                                    type={'submit'}
                                >
                                    Sign in
                                </Button>
                                <Button
                                    bg={'teal'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'teal.500',
                                    }}
                                >
                                    Guest User
                                </Button>
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
};

export default Login;
