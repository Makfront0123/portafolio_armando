import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const FormUser = () => {
    const form = useRef<HTMLFormElement>(null);

    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const serviceId = import.meta.env.VITE_SOME_KEY_SERVICE_ID;
    const templateId = import.meta.env.VITE_SOME_KEY_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_SOME_KEY_PUBLIC_KEY;

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (form.current) {
            emailjs
                .sendForm(serviceId, templateId, form.current, {
                    publicKey: publicKey,
                })
                .then(
                    () => {
                        alert('SUCCESS!');
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        alert('FAILED...');
                        console.log('FAILED...', error.text);
                    },
                );
        } else {
            console.log('El formulario no está definido');
        }
    };

    return (
        <form onSubmit={sendEmail} className="flex flex-col gap-y-4 w-full md:-mt-8 mt-10" ref={form}>
            <FormInput title="Name" name="user_name" value={formData.user_name} onChange={handleInputChange} />
            <FormInput title="Email" name="user_email" value={formData.user_email} onChange={handleInputChange} />
            <FormTextarea title="Message" name="message" value={formData.message} onChange={handleInputChange} />
            <button
                type="submit"
                className="rounded-[15px] max-w-[15vh] border-2 border-blue-400 px-5 py-2 mt-5 text-black hover:shadow-md transition-all duration-200 hover:shadow-blue-700 hover:bg-blue-400 hover:text-white"
            >
                Submit
            </button>
        </form>
    );
};

export default FormUser;

interface FormInputProps {
    title: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormInput = ({ title, name, value, onChange }: FormInputProps) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={name}>
                <span className="text-gray-600 font-semibold">{title}</span>
            </label>
            <input
                type="text"
                id={name}
                name={name}
                className="border-b-[1.7px] border-gray-400 bg-transparent"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

interface FormTextareaProps {
    title: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const FormTextarea = ({ title, name, value, onChange }: FormTextareaProps) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={name}>
                <span className="text-gray-600 font-semibold">{title}</span>
            </label>
            <textarea
                id={name}
                name={name}
                className="border-b-[1.7px] border-gray-400 bg-transparent"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};