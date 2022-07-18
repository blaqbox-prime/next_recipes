import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {sanityClient, urlFor} from '../lib/sanity'



const recipeQuery = `*[_type == "recipe"]{
  _id,
  name,
  slug,
  mainImage,
  instructions
}`;

export default function Home({recipes}) {
  return (
    <div >
      <Head>
        <title>Kapehes | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome To Kaps Joint</h1>

      <ul className="recipe-list">
        {recipes?.length > 0 && recipes.map((recipe) => {

          return (
          <li key={recipe._id} className="recipe-card">
          <Link href={`/recipes/${recipe.slug.current}`}>
          <a>
            <img src={urlFor(recipe.mainImage).url()} width="250px" height='250px' alt="stuff"></img>
            <span>{recipe.name}</span>
          </a>
          </Link>
        </li>
)
        })}
      </ul>

    </div>
  )
}

// Creates props for our components

export async function getStaticProps(){
  const recipes = await sanityClient.fetch(recipeQuery);
  console.log(recipes)

  return {
    props: {recipes}
  }
}