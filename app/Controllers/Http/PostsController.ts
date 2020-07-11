import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'

export default class PostsController {
  public async index () {
    return await Post.all()
  }

  public async store ({ request }: HttpContextContract) {
    const data = request.only(['title', 'content'])
    const post = {
      title: data.title,
      content: data.content,
    }
    return await Post.create(post)
  }

  public async show ({ params }: HttpContextContract) {
    return await Post.find(params.id)
  }

  public async destroy ({ params }: HttpContextContract) {
    const post = await Post.find(params.id)
    post?.delete()
  }
}
