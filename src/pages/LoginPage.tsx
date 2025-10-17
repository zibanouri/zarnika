import { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';

import {
    Mail,
    Lock,
    EyeClosed,
    Github,
    Facebook,
    Chrome,
    Eye,
} from 'lucide-react';

import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
    const navigate = useNavigate();
    const [showPassword, setshowPassword] = useState(true);
    const handleLogine = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/');
    };
    return (
        <div className="min-h-screen bg-gradient-to-br from-background to-slate-200 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="flex justify-center">
                        <img
                            src="/zarnika/avatar/fav..png"
                            alt="Zarnika Logo"
                            className="w-16 h-auto"
                        />
                    </div>
                    <p className="mt-2 text-slate-700">
                        Welcome back to your dashboard
                    </p>
                </div>

                <Card className="shadow-xl border-0 bg-card/95 backdrop-blur">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl font-semibold text-center">
                            Login
                        </CardTitle>
                        <CardDescription className="text-center">
                            Enter your email and password to access your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <form className="space-y-4" onSubmit={handleLogine}>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-[10px] h-4 w-4 text-slate-800" />
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        className="pl-10"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-[10px] h-4 w-4 text-slate-800" />
                                    <Input
                                        id="password"
                                        name="password"
                                        type={
                                            showPassword ? 'text' : 'password'
                                        }
                                        placeholder="Enter your password"
                                        className="pl-10"
                                        required
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                                        onClick={() =>
                                            setshowPassword(!showPassword)
                                        }
                                    >
                                        {showPassword ? (
                                            <Eye className="h-4 w-4 text-slate-800" />
                                        ) : (
                                            <EyeClosed className="h-4 w-4 text-slate-800" />
                                        )}
                                    </Button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="remember" name="remember" />
                                    <Label
                                        htmlFor="remember"
                                        className="text-sm font-normal"
                                    >
                                        Remember me
                                    </Label>
                                </div>
                                <Button
                                    variant="link"
                                    size="sm"
                                    className="px-0 font-normal"
                                >
                                    Forgot Password?
                                </Button>
                            </div>
                            <Button type="submit" className="w-full">
                                Sign In
                            </Button>
                        </form>
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <Separator className="w-full" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-card px-2 text-muted-foreground">
                                    Or continue with
                                </span>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                            <Button variant="outline" className="w-full">
                                <Chrome className="h-4 w-4 mr-2" />
                                Google
                            </Button>
                            <Button variant="outline" className="w-full">
                                <Github className="h-4 w-4 mr-2" />
                                Github
                            </Button>
                            <Button variant="outline" className="w-full">
                                <Facebook className="h-4 w-4 mr-2" />
                                Facebook
                            </Button>
                        </div>
                        <div className="text-center text-sm">
                            <span className="text-muted-foreground">
                                Don't have an account?{' '}
                            </span>
                            <Button
                                variant="link"
                                className="px-0 font-normal"
                                onClick={() => navigate('/register')}
                            >
                                Sign up
                            </Button>
                        </div>
                    </CardContent>
                </Card>
                <div className="text-center mt-8 text-sm">
                    Zarnika© 2025 Ziba Nouri. All Rights Reserved. Made with
                    love by ✨
                    <a
                        className="pl-1 text-pink-950 hover:text-pink-700 duration-300"
                        target="blank"
                        href="https://github.com/zibanouri"
                    >
                        Ziba
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
