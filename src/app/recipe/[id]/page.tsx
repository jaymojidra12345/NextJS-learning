import { getRecipeById } from "@/features/recipes/api";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

type Params = Promise<{ id: string }>;

export default function RecipeDetailPage({ params }: { params: Params }) {
    // Use React 19's use hook to unwrap the params promise and the fetch promise
    const { id } = use(params);
    const recipe = use(getRecipeById(id));

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                        <svg
                            className="mr-2 w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>
                        Back to recipes
                    </Link>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="relative h-96 w-full">
                        <Image
                            src={recipe.image}
                            alt={recipe.name}
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 1024px"
                        />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-gray-800 flex items-center shadow-md">
                            <svg
                                className="w-5 h-5 text-yellow-500 mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            {recipe.rating} ({recipe.reviewCount} reviews)
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                            <div>
                                <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
                                    {recipe.name}
                                </h1>
                                <p className="text-lg text-gray-500">{recipe.cuisine} Cuisine</p>
                            </div>
                            <span
                                className={`inline-block px-4 py-2 text-sm font-bold rounded-full border ${recipe.difficulty === "Easy"
                                        ? "bg-green-50 border-green-200 text-green-700"
                                        : recipe.difficulty === "Medium"
                                            ? "bg-yellow-50 border-yellow-200 text-yellow-700"
                                            : "bg-red-50 border-red-200 text-red-700"
                                    }`}
                            >
                                {recipe.difficulty}
                            </span>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-gray-100 mb-8">
                            <div className="text-center">
                                <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-1">
                                    Prep Time
                                </p>
                                <p className="text-xl font-bold text-gray-900">
                                    {recipe.prepTimeMinutes} m
                                </p>
                            </div>
                            <div className="text-center">
                                <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-1">
                                    Cook Time
                                </p>
                                <p className="text-xl font-bold text-gray-900">
                                    {recipe.cookTimeMinutes} m
                                </p>
                            </div>
                            <div className="text-center">
                                <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-1">
                                    Servings
                                </p>
                                <p className="text-xl font-bold text-gray-900">
                                    {recipe.servings}
                                </p>
                            </div>
                            <div className="text-center">
                                <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-1">
                                    Calories
                                </p>
                                <p className="text-xl font-bold text-gray-900">
                                    {recipe.caloriesPerServing}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-10">
                            {recipe.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-full"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        <div className="grid md:grid-cols-3 gap-12">
                            <div className="md:col-span-1">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <svg
                                        className="w-6 h-6 mr-2 text-indigo-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                        />
                                    </svg>
                                    Ingredients
                                </h2>
                                <ul className="space-y-4">
                                    {recipe.ingredients.map((ingredient, i) => (
                                        <li key={i} className="flex items-start">
                                            <svg
                                                className="w-5 h-5 text-indigo-500 mr-3 shrink-0 mt-0.5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span className="text-gray-700">{ingredient}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="md:col-span-2">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    Instructions
                                </h2>
                                <ol className="space-y-6">
                                    {recipe.instructions.map((instruction, i) => (
                                        <li key={i} className="flex">
                                            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm mr-4 mt-0.5">
                                                {i + 1}
                                            </span>
                                            <p className="text-gray-700 leading-relaxed pt-1">
                                                {instruction}
                                            </p>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
