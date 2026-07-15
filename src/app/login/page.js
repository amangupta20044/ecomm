"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";

export default function LoginPage() {
    let router=useRouter()
    const [formData, setFormData] = useState({})
    console.log(formData)

    let handleChange = (e) => {
        let { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    let handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            let res = await api.post("/api/auth/login",formData)
            router.push("/home")
        }catch(error){
            console.log("error in login",error)
        }
    }
    return (
        <div className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-muted/40 px-4">
            <Card className="w-full max-w-md shadow-lg">
                <CardHeader className="space-y-2 text-center">
                    <CardTitle className="text-3xl font-bold">
                        Welcome Back
                    </CardTitle>

                    <CardDescription>
                        Login to your account
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <Label>Email</Label>
                            <Input
                                name={"email"}
                                onChange={handleChange}
                                type="email"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label>Password</Label>

                            <Input
                                name={"password"}
                                onChange={handleChange}
                                type="password"
                                placeholder="Enter your password"
                            />
                        </div>

                        <Button className="w-full">
                            Login
                        </Button>
                    </form>

                    <p className="mt-6 text-center text-sm text-muted-foreground">
                        Don't have an account?{" "}
                        <Link
                            href="/register"
                            className="font-semibold text-primary hover:underline"
                        >
                            Register
                        </Link>
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}