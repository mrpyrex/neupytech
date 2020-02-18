import graphene
from django.core.mail import send_mail
from graphene_django import DjangoObjectType
from .models import Contact
from graphql import GraphQLError


class ContactType(DjangoObjectType):
    class Meta:
        model = Contact


class Query(graphene.ObjectType):
    contacts = graphene.List(ContactType)

    def resolve_contacts(self, info):

        return Contact.objects.all()


class CreateContact(graphene.Mutation):
    contact = graphene.Field(ContactType)

    class Arguments:
        name = graphene.String()
        email = graphene.String()
        phone = graphene.String()
        message = graphene.String()

    def mutate(self, info, **kwargs):
        email = kwargs.get('email')
        name = kwargs.get('name')
        phone = kwargs.get('phone')
        message = kwargs.get('message')
        recipients = ['neupytechng@gmail.com']
        contact = Contact(**kwargs)
        contact.save()
        send_mail('Contact Received', message, email,
                  recipients, fail_silently=False)

        return CreateContact(contact=contact)


class Mutation(graphene.ObjectType):
    create_contact = CreateContact.Field()
