import graphene
import users.schema
import blog.schema
import contact.schema
import job.schema
import graphql_jwt


class Query(users.schema.Query, contact.schema.Query, blog.schema.Query,  job.schema.Query, graphene.ObjectType):
    pass


class Mutation(users.schema.Mutation, contact.schema.Mutation, blog.schema.Mutation, job.schema.Mutation, graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
