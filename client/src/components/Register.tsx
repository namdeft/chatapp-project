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
    FormErrorMessage,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Register: React.FC = () => {
    const [showPassword, setShowPassword] = useState<Boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<Boolean>(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Name is required')
                .min(5, 'Name must be at least 5 characters'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string()
                .required('Password is required')
                .min(6, 'Password must be at least 6 characters'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password')], 'Passwords must match')
                .required('Confirm password is required'),
        }),
        validateOnChange: true,
        onSubmit: (values) => {
            console.log(values);
        },
    });

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
                    <form onSubmit={formik.handleSubmit}>
                        <Stack spacing={4}>
                            <FormControl isInvalid={formik.touched.name && formik.errors.name}>
                                <FormLabel>Name</FormLabel>
                                <Input
                                    name='name'
                                    type='name'
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.name && formik.errors.name && (
                                    <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                                )}
                            </FormControl>

                            <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                                <FormLabel>Email address</FormLabel>
                                <Input
                                    name='email'
                                    type='email'
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                                )}
                            </FormControl>

                            <FormControl
                                isInvalid={formik.touched.password && formik.errors.password}
                            >
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <Input
                                        type={showPassword ? 'text' : 'password'}
                                        name='password'
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                    />
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
                                {formik.touched.password && formik.errors.password && (
                                    <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                                )}
                            </FormControl>

                            <FormControl
                                isInvalid={
                                    formik.touched.confirmPassword && formik.errors.confirmPassword
                                }
                            >
                                <FormLabel>Confirm Password</FormLabel>
                                <InputGroup>
                                    <Input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        name='confirmPassword'
                                        value={formik.values.confirmPassword}
                                        onChange={formik.handleChange}
                                    />
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
                                {formik.touched.confirmPassword &&
                                    formik.errors.confirmPassword && (
                                        <FormErrorMessage>
                                            {formik.errors.confirmPassword}
                                        </FormErrorMessage>
                                    )}
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
                                    type={'submit'}
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
                    </form>
                </Box>
            </Stack>
        </Flex>
    );
};

export default Register;
