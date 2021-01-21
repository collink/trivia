import { QueryResolvers, MutationResolvers } from './type-defs.graphqls'
import { ResolverContext } from './apollo'

const Query: Required<QueryResolvers<ResolverContext>> = {
  game(_parent, _args, _context_, _info) {
    return {
      id: '123',
      namespace: 'foo',
      numTeams: 2
    }
  }
}

const Mutation: Required<MutationResolvers<ResolverContext>> = {
  createGame(_parent, _args, _context, _info) {
    return {
      id: '123',
      namespace: 'foo',
      numTeams: _args.numTeams
    };
  }
}

export default { Query, Mutation }
