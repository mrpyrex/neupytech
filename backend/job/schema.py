import graphene
from graphene_django import DjangoObjectType
from .models import Job, Profile
from graphql import GraphQLError
# from users.schema import AuthorType
from django.db.models import Q


class JobType(DjangoObjectType):
    class Meta:
        model = Job


class ProfileType(DjangoObjectType):
    class Meta:
        model = Profile


class Query(graphene.ObjectType):
    jobs = graphene.List(JobType)
    job = graphene.Field(JobType,
                         id=graphene.Int())

    profiles = graphene.List(ProfileType)

    def resolve_profiles(self, info):

        return Profile.objects.all()

    def resolve_jobs(self, info, **kwargs):

        return Job.objects.all()

    def resolve_job(self, info, **kwargs):
        id = kwargs.get('id')

        if id is not None:
            return Job.objects.get(pk=id)

        return None


class CreateJob(graphene.Mutation):
    job = graphene.Field(JobType)

    class Arguments:
        title = graphene.String()
        summary = graphene.String()
        image = graphene.String()

    def mutate(self, info, **kwargs):
        job = Job(**kwargs)
        job.save()
        return CreateJob(job=job)


class Mutation(graphene.ObjectType):
    create_job = CreateJob.Field()
