"use client";

import React, { useState } from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactMessageSchema,
  ContactMessageFormValues,
} from "@/lib/validations/contact-message-schema";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  AlertTriangle,
  Loader2,
  CheckCircle,
  MessageSquare,
  User,
  Send,
} from "lucide-react";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactMessageFormValues>({
    resolver: zodResolver(contactMessageSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const { toast } = useToast();

  const onSubmit = async (data: ContactMessageFormValues) => {
    try {
      const response = await fetch("/api/contact-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || "Erreur lors de l'envoi du message");
      }

      setIsSubmitted(true);
      reset();
      toast({
        title: "Succès",
        variant: "default",
        description: "Votre message a été envoyé avec succès.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description:
          error instanceof Error
            ? error.message
            : "Une erreur s'est produite. Veuillez réessayer.",
      });
    }
  };

  return (
    <div className="pb-20 pt-36 bg-[#FAF3E0] relative z-10 min-h-screen">
      {/* Effets lumineux */}
      <div className="relative pointer-events-none">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen opacity-90"
          fill="#FFC107"
        />
        <Spotlight
          className="-top-10 left-full h-[80vh] w-[50vw] opacity-80"
          fill="#66BB6A"
        />
        <Spotlight
          className="-top-28 left-80 h-[80vh] w-[50vw] opacity-85"
          fill="#66BB6A"
        />
      </div>

      {/* Contenu principal */}
      <div className="relative flex justify-center my-20">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            className="text-center !text-black text-3xl md:text-4xl lg:text-6xl drop-shadow-lg"
            words="Contactez-nous"
          />
          <p className="text-center !text-black md:tracking-wider mb-8 text-sm md:text-lg lg:text-2xl drop-shadow-lg">
            Envoyez-nous votre message et notre équipe vous répondra rapidement.
          </p>

          <Card className="w-full border-2 border-gray-100 shadow-2xl hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm pointer-events-auto z-20">
            <CardHeader className="space-y-1 border-b bg-gray-50/50 pb-6">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 !text-black" />
                <CardTitle className="text-xl font-bold !text-black drop-shadow-lg">
                  Formulaire de contact
                </CardTitle>
              </div>
              <CardDescription className="!text-black drop-shadow-sm">
                Remplissez les champs ci-dessous pour nous contacter.
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-6">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8 px-4 space-y-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold !text-black drop-shadow-lg">
                    Message envoyé avec succès !
                  </h3>
                  <p className="!text-black drop-shadow-sm">
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 !text-black border-gray-300 hover:bg-gray-100 drop-shadow-lg"
                    onClick={() => {
                      setIsSubmitted(false);
                      reset();
                    }}
                  >
                    Nouveau message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="first_name"
                        className="text-sm font-semibold !text-black flex items-center gap-2 drop-shadow-sm"
                      >
                        <User className="h-4 w-4" />
                        Prénom
                      </label>
                      <Input
                        id="first_name"
                        {...register("first_name")}
                        placeholder="Votre prénom"
                        className="bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-400 focus-visible:ring-1 focus-visible:ring-gray-400 transition-colors drop-shadow-sm"
                        disabled={isSubmitting}
                      />
                      {errors.first_name && (
                        <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                          <AlertTriangle className="h-3.5 w-3.5" />
                          {errors.first_name.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="last_name"
                        className="text-sm font-semibold !text-black flex items-center gap-2 drop-shadow-sm"
                      >
                        <User className="h-4 w-4" />
                        Nom
                      </label>
                      <Input 
                        id="last_name"
                        {...register("last_name")}
                        placeholder="Votre nom"
                        className="bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-400 focus-visible:ring-1 focus-visible:ring-gray-400 transition-colors drop-shadow-sm"
                        disabled={isSubmitting}
                      />
                      {errors.last_name && (
                        <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                          <AlertTriangle className="h-3.5 w-3.5" />
                          {errors.last_name.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold !text-black flex items-center gap-2 drop-shadow-sm"
                    >
                      <Mail className="h-4 w-4" />
                      Email
                    </label>
                    <Input
                      id="email"
                      {...register("email")}
                      placeholder="votre@email.com"
                      className="bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-400 focus-visible:ring-1 focus-visible:ring-gray-400 transition-colors drop-shadow-sm"
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                        <AlertTriangle className="h-3.5 w-3.5" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="subject"
                      className="text-sm font-semibold !text-black flex items-center gap-2 drop-shadow-sm"
                    >
                      <MessageSquare className="h-4 w-4" />
                      Sujet
                    </label>
                    <Input
                      id="subject"
                      {...register("subject")}
                      placeholder="Objet de votre message"
                      className="bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-400 focus-visible:ring-1 focus-visible:ring-gray-400 transition-colors drop-shadow-sm"
                      disabled={isSubmitting}
                    />
                    {errors.subject && (
                      <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                        <AlertTriangle className="h-3.5 w-3.5" />
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold !text-black flex items-center gap-2 drop-shadow-sm"
                    >
                      <MessageSquare className="h-4 w-4" />
                      Message
                    </label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder="Écrivez votre message ici..."
                      rows={6}
                      className="bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-400 focus-visible:ring-1 focus-visible:ring-gray-400 transition-colors resize-none drop-shadow-sm"
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                        <AlertTriangle className="h-3.5 w-3.5" />
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-black hover:bg-gray-800 text-white hover:text-white transition-all duration-300 text-sm font-semibold py-5 mt-4 drop-shadow-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Envoyer
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;