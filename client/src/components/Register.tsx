import React, { useState } from 'react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const Register: React.FC = () => {
    const [showPassword, setShowPassword] = useState<Boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<Boolean>(false);

    return (
        <Flex minH={'100vh'} align={'center'} justify={'center'}>
            <Stack spacing={8} mx={'auto'} minW={'xl'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Register
                    </Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of cool <Link color={'teal.400'}>features</Link> ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}
                    color='black'
                >
                    <Stack spacing={4}>
                        <FormControl id='Name' isRequired>
                            <FormLabel>Name</FormLabel>
                            <Input type='text' />
                        </FormControl>

                        <FormControl id='email' isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input type='email' />
                        </FormControl>

                        <FormControl id='password' isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input type={showPassword ? 'text' : 'password'} />
                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        onClick={() =>
                                            setShowPassword((showPassword) => !showPassword)
                                        }
                                    >
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>

                        <FormControl id='password' isRequired>
                            <FormLabel>Confirm Password</FormLabel>
                            <InputGroup>
                                <Input type={showConfirmPassword ? 'text' : 'password'} />
                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        onClick={() =>
                                            setShowConfirmPassword(
                                                (showConfirmPassword) => !showConfirmPassword
                                            )
                                        }
                                    >
                                        {showConfirmPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>

                        <Stack spacing={10} pt={2}>
                            <Button
                                loadingText='Submitting'
                                size='lg'
                                bg={'teal'}
                                color={'white'}
                                _hover={{
                                    bg: 'teal.500',
                                }}
                            >
                                Sign up
                            </Button>
                        </Stack>
                        <Stack pt={3}>
                            <Text align={'center'}>
                                Already a user?{' '}
                                <Link href='/login' color={'teal.600'}>
                                    Login
                                </Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
};

export default Register;
