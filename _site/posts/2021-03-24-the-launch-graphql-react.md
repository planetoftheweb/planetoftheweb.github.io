---
layout: post
title: "The Launch Video LiveStream: Understanding how React Hooks work with GraphQL using the Github GraphQL API"
summary: "GraphQL and React are extemely popular web development platforms and if I was looking for a job something that i'd definitely want on my resume. The Github API is public and pretty well made, so it makes it a great place to experiment on something practical."
hero: /images/posts/launch-react-graphq.jpg
thumb: /images/posts/launch-react-graphq.jpg
video: 71RrEJ00gPk
category: posts
tags:
  - tutorial
  - video
  - web development
  - tooling
---

## React GraphQL

![Github GraphQL Course](/images/posts/githubgraphqlcourseimage.jpg)

I'm the type of learner that learns by doing, that's why I build so many courses that are project based. In [Building a GraphQL Project with React.js](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/), I try to give you practical experience that are good starting points for your own things.

Let's take a look at what I built for this course.

## Repo

You can find the code for this project freely available as a [GitHub repo](https://go.raybo.org/3Swp). I built an interface that reads some data from Github's GraphQL API, so this is getting information about my personal repositories.

**Note:** If you're using this repo, you'll need to create your own authentication token as well as a file for this project to read that. Here's a video on how to do that.

<div style="position:relative;height:0;padding-bottom:56.25%"><iframe width="640" height="360" src="https://www.linkedin.com/learning/embed/building-a-graphql-project-with-react-js/github-authentication-tokens?claim=AQHtUOynN8IqGQAAAXhjj5FMddgl2t5b9M_76WfgEhytN3KxMIP5zUjBx903a745ciZVGwdAhScdu_OahT44EWMZp805w1Sk8AQdJg5nL7m5mWQO4GlrIaXRJK7UIjIVYGkson4kKJinCeqS5iUb5QBk-KACzACvWFCXEJzVVwfYqRxwNF7_kIpZSS8_XWinv4DnJvCShgch2fmNCpO7kvDXhcF8ERDYbigmoHzMXmiyl8wkox7nBSIc1DzY5poc_8scV56TYoxjDe9qZD3ZbkKXczpjgB3IsnlZhRSBP2tG8wWpoNy7GaLgfcLxck5mspWXw3i3DEKTuQyR0HGT5x-Eq7Y6XhiS5zQsYbrMU0eUuKaqa2xL4kHxljS3DvOFhqzPSekhLDhaiYFn5S7duXg1dEF6uw2WfIrT1MBq70WM5Pa5sYgx_YEe70ArcoepfoECgW7CwX6I7KTG-PMmvZKQpd9V3WTRlTI3rNUQnD4qEVoq1GzwmYpIJFla8B-l7D_3CiPXavWeOTVAzCFaRAL6boBNBmj6rWZbvsV1YxWswJH3ooPxLAK9_2ye0KAappi8NtbXY3XOJQK_9S0ub7NhSbY9D5agJ2-X8M6qQM82X0NgTJkFMp-zhyNH5ULJ06gapQ2qC2WF3ZqD7c27QCpd6QgaOVRgkkQHNOBIUpahVZbtRAAdhMFR_f0AvTwIwNSjjc9kQY5suRNq0Fq0PF-2ceo4Zh8Jnq7bc7W6ZwE" mozallowfullscreen="true" webkitallowfullscreen="true" allowfullscreen="true" frameborder="0" style="position:absolute;width:100%;height:100%;left:0"></iframe></div><p><strong><a href="https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?trk=embed_lil">GitHub authentication tokens</a></strong> from <strong><a href="https://www.linkedin.com/learning/building-a-graphql-project-with-react-js?trk=embed_lil">Building a GraphQL Project with React.js</a></strong> by <strong><a href="https://www.linkedin.com/learning/instructors/ray-villalobos?trk=embed_lil">Ray Villalobos</a></strong></p>

![Github GraphQL App](http://pixelprowess.com/i/2021-03-24_04-51-09.png)

I'm able to pull a description, the link and name of each repo the license is. I'm color coding the data a bit to highlight when I forgot to add a license to a repo.

I wanted a simple search, so I'm using the power of React querying the Github GraphQL API here. On the right I show you the total and give you the ability to control the number of resutls.

I also added pagination so you can navigate the number of results. Let's take a peek at the tech I'm using here.

## The Tech

Here's what I'm using in this application. Of course, I'm using [React](https://reactjs.org/) and [GraphQL](https://graphql.org/). Specifically I'm using [Github's GraphQL API]([Github GraphQL](https://docs.github.com/en/graphql/overview/explorer).

I'm also using [Bootstrap 5B1](https://getbootstrap.com/)). I tend to go with the latest for each course and at the time of recording Beta 1 was the latest. It should hold pretty good, but Beta 2 added RTL (Right to left features that might affect things if you're using the latest).

<iframe width="560" height="315" src="https://www.youtube.com/embed/Nhpyb1jx54A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

I'm really loving [Bootstrap Icons](https://icons.getbootstrap.com/). You can use it for all types of projects. It's already up to 1300 icons and growing.

I'm using the [Sass](https://sass-lang.com/) version of bootstrap. it's easier to change color and I show you how to do that in the course.

Let's dig into GraphQL Next

## GraphQL Basics

![GraphQL Site](http://pixelprowess.com/i/2021-03-24_04-56-20.png)

GraphQL is an open source [Query Language](https://graphql.org/) for managing data on a server.

What makes it unique is that it lets you retrieve everyting you need in a single call. You get a lot of information quicker than with traditional REST APIs in less requests to the server.

## GitHub GraphQL

Github's version allows you to look up account information and it's a good place to get some practical experience with GraphQL.

![Github's GraphQL Explorer](http://pixelprowess.com/i/2021-03-24_04-57-23.png)

Github has a tool called the [GraphQL Explorer](https://docs.github.com/en/free-pro-team@latest/graphql/overview/explorer) lets you use your real, live production data from Github as if you were in an app that's already authenticated. The Explorer also has a lot of built in documentation.

On the left hand side, there's a spot to type in your query (1), you should see a basic query that will get your login.

```graphql
query {
  viewer {
    login
  }
}
```

## GraphQL Queries

Let's talk about the structure of a the GraphQL query we just ran. The structure of all your data is known as the `schema`

Searches are done by using looking through different `fields` and sub-fields. So, in our example, viewer is a field we're looking for.

The fields can be of different types. You're probably familiar with some traditional types like strings, integers and booleans, but each GraphQL instance also has it's own custom types.

## GraphQL Requests

In the Github GraphQL API, there are two root types you can use. The first is `queries`. This is a simple request for information from the server. The second is a mutation. This creates a request to modify data on the Github servers. In this course I focus on queries which is the most common type.

## Other Fields

![Asking for Other Fields](http://pixelprowess.com/i/2021-03-24_04-58-32.png)

You can request more than one field, so I'm ading `name`, `bio`, `company` and `avatarUrl`, which is a link to my profile image by using the following query.

```graphql
{
  viewer {
    login
    name
    bio
    company
    avatarUrl
  }
}
```

## Arguments

![Passing Arguments](http://pixelprowess.com/i/2021-03-24_05-01-02.png)
You can pass arguments to repositories, so let's say I wanted information about a specific license you can use in repos.

Let's use the docs to read how we would do this. Click on the Query field and scroll down to the license field. Note that it expects an argument called key and then a string. Now click on the license type to see details.

Notice that it expects a [SPDX ID](https://spdx.org/licenses/), which are shortnames for all of the difference licenses. I happen to know that the SPXID for the MIT license is just the word `MIT`, so let's try sending that.

```graphql
{
  license(key: "MIT") {
    name
    description
    body
    url
  }
}
```

This type will also want to know which fields we want to ask for. If you click on the license type, you'll see that there are lots of other things we can ask for like the name, description,body, etc.

Now take a peek at the explorer and you'll notice that you can also choose things from there, or see the structure of the fields. Somtimes it helps to see then in that outline format.

## Nodes

![Nodes](http://pixelprowess.com/i/2021-03-24_05-03-43.png)

Nodes give you access to a list of elements. For example here, we can retrieve a list of repository information.

```graphql
{
  viewer {
    repositories(first: 2) {
      totalCount
      nodes {
        name
        description
        id
      }
    }
  }
}
```

They do require an argument that at least describes how many results. There is a limit of a 100 results, so keep that in mind.

## Qualifying Results

There are a number of ways to qualify your results, so for example here, I'm asking for only the first two items ordered by the created date in descending order.

```graphql
{
  viewer {
    repositories(first: 2, orderBy: { field: CREATED_AT, direction: DESC }) {
      totalCount
      nodes {
        name
        description
        id
      }
    }
  }
}
```

## Edges

```graphql
{
  viewer {
    repositories(first: 2, orderBy: { field: CREATED_AT, direction: DESC }) {
      totalCount
      edges {
        node {
          name
          description
          id
        }
      }
    }
  }
}
```

Paginating is done with a field called edges. You wrap the nodes with an edges request and then change the name of nodes to node.

## Cursors

```graphql
{
  viewer {
    repositories(first: 2, after: "Y3Vyc29yOnYyOpK5MjAyMC0xMi0zMVQyMDoxMDoyNi0wODowMM4TbQ-E", orderBy: { field: CREATED_AT, direction: DESC }) {
      totalCount
      edges {
        node {
          name
          description
          id
        }
        cursor
      }
      pageInfo {
        hasPreviousPage
        startCursor
        endCursor
        hasNextPage
      }
    }
  }
}
```

Cursors are unique identifiers in each data point. To paginate, you'll need to know some information about the current 'page'. To do that we can ask for the pageInfo field.

That will give you information about what wether there will be a page before or after this, as well as the beginning and ending cursors. Here's what I get back.

```json
{
  "data": {
    "viewer": {
      "repositories": {
        "totalCount": 190,
        "edges": [
          {
            "node": {
              "name": "testcoherency",
              "description": null,
              "id": "MDEwOlJlcG9zaXRvcnkzMjQ1NzY4ODg="
            },
            "cursor": "Y3Vyc29yOnYyOpK5MjAyMC0xMi0yNlQwOTo1NzowNS0wNTowMM4TWKZ4"
          },
          {
            "node": {
              "name": "dotfiles",
              "description": null,
              "id": "MDEwOlJlcG9zaXRvcnkzMjE4MTgxODg="
            },
            "cursor": "Y3Vyc29yOnYyOpK5MjAyMC0xMi0xNVQxODo1MjoyMC0wNTowMM4TLo5M"
          }
        ],
        "pageInfo": {
          "hasPreviousPage": true,
          "startCursor": "Y3Vyc29yOnYyOpK5MjAyMC0xMi0yNlQwOTo1NzowNS0wNTowMM4TWKZ4",
          "endCursor": "Y3Vyc29yOnYyOpK5MjAyMC0xMi0xNVQxODo1MjoyMC0wNTowMM4TLo5M",
          "hasNextPage": true
        }
      }
    }
  }
}
```

Alright, that's most of what you need to know about GraphQL. IDK, I feel like that was easier than learning SQL.

## React Hooks

React Hooks is a newer approach to building React applications without writing classes.

## Advantages of Hooks

- No Classes
- More like JavaScript
- `this` binding

The class based structure of React used to provide a way to simplify writing code, but eventually it started to show it's age because JavaScript as a language had moved on from this approach.

Using hooks feels more like using modern javascript and honestly makes a lot more sense.

One really akward feature before hooks was the meaning of this in JavaScript. You had to constantly make sure that you bound objects to the right objects manually. Hooks development avoids this using arrow functions and other more modern techniques.

## Devs 💖 Hooks <a class="btn btn-warning m-0" href="https://www.linkedin.com/posts/planetoftheweb_react-graphql-github-activity-6779841719287603200-2ZU5"> Poll</a>

![Developers Love Hooks Poll](http://pixelprowess.com/i/2021-03-24_03-58-31.png)

Let me tell you something. Almost everybody that uses Hooks loves them and quickly starts preferring them.

You can see that in this informal poll I ran earlier this week.

## Hooks Problems

I do have some problems with Hooks. First is that it creates two versions of React. React with Classes and React with Hooks.

The thing is that if you use the CreateReactApp API, it uses hooks, but if you look through the documentation, The addition of hooks complicates things. Sometimes you'll see class API samples, sometimes both.

Also, I feel like things that were more straightforward with classes become more complicated with hooks. So, for example the whole concept behind lifecycle methods in React helped you control state at different points in your application loading process.

This is now replaced with hooks like the useEffect hook, which replaces the `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` hooks. and state is now managed with the useState hook. At any rate, you'll need to [rethink old concepts](https://reactjs.org/docs/hooks-effect.html) when using Hooks if you're used to a class based structure.

## Hooks in Practice

The key to understanding hooks in this application is two parts. How I get my data and what I do with it, so let's go over that quickly.

```jsx
const fetchData = useCallback(() => {
  const queryText = JSON.stringify(query(pageCount, queryString, paginationKeyword, paginationString));

  fetch(github.baseURL, {
    method: "POST",
    headers: github.headers,
    body: queryText,
  })
    .then((response) => response.json())
    .then((data) => {
      const viewer = data.data.viewer;
      const repos = data.data.search.edges;
      const total = data.data.search.repositoryCount;
      const start = data.data.search.pageInfo?.startCursor;
      const end = data.data.search.pageInfo?.endCursor;
      const next = data.data.search.pageInfo?.hasNextPage;
      const prev = data.data.search.pageInfo?.hasPreviousPage;

      setUserName(viewer.name);
      setRepoList(repos);
      setTotalCount(total);

      setStartCursor(start);
      setEndCursor(end);
      setHasNextPage(next);
      setHasPreviousPage(prev);
    })
    .catch((err) => {
      console.log(err);
    });
}, [pageCount, queryString, paginationString, paginationKeyword]);

useEffect(() => {
  fetchData();
}, [fetchData]);
```

First, To get the data, I'm using a useEffect hook and calling a fetchData function. That function is just using JavaScript's Fetch API to query the Github GraphQL API. Just like when we were using the GraphiCAL (GraphiQL) interface.

Now, to get this data, we're using a useCallBack hook. That allows us to fine tune how often our data is retrieved.

```js
  const fetchData = useCallback(() => {
  ...
  }, [pageCount, queryString, paginationString, paginationKeyword]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
```

We only want it to get more data if `pageCount, queryString, paginationString, paginationKeyword` variables change. Any changes to these variables will cause a reload of the data. We use this in a query component.

```jsx
query(pageCount, queryString, paginationKeyword, paginationString);
```

This is in the `Query.js` file and it looks just like what we use in the GraphyQL interface.

```jsx
const githubQuery = (pageCount, queryString, paginationKeyword, paginationString) => {
  return {
    query: `
    {
      viewer {
        name
      }
      search(query: "${queryString} user:planetoftheweb sort:updated-desc", type: REPOSITORY, ${paginationKeyword}: ${pageCount}, ${paginationString}) {
        repositoryCount
        edges {
          cursor
          node {
            ... on Repository {
              name
              description
              id
              url
              viewerSubscription
              licenseInfo {
                spdxId
              }
            }
          }
        }
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
      }
    }
  `,
  };
};

export default githubQuery;
```

That's what we pass to the fetch API which then gets JSON data. When we get that we use the useState hook to modify the state of our application. React then takes care of managing the DOM as usual, which is the cool part of React.

If you haven't tried the `useState` hook, it's simply a way to create data in our application and it has three parts.

```jsx
let [queryString, setQueryString] = useState("");
```

We define a variable called `queryString` here that we're going to use in our app to keep track of the search we want to perform and then a method that we can use to update that variable called `setQueryString`. Then we initialize that variable with useState and passing an empty string.

Let's focus on one part of our app now to see how changing something works.

In our [SearchBox.js](https://github.com/LinkedInLearning/react-graphql-2875095/blob/4b8ae9b2939e4fa0459a09103249d578e73e86df/src/SearchBox.js#L14-L22) file we can see how we track a change in our query terms.

```jsx
<input
  id="queryString"
  className="form-control form-control-sm me-2"
  type="text"
  value={queryString}
  onChange={(event) => {
    onQueryChange(event.target.value);
  }}
/>
```

We look for a change in the search box text and pass the value of that text to a method on the `App.js` file. Here's how that component is set up in `App.js` file.

```jsx
<SearchBox
  totalCount={totalCount}
  pageCount={pageCount}
  queryString={queryString}
  onTotalChange={(myNumber) => {
    setPageCount(myNumber);
  }}
  onQueryChange={(myString) => {
    setQueryString(myString);
  }}
/>
```

What happens then is that our callback which is tracking the value of `queryString` for changes, recognizes the change and fetches a [new version of our query](https://github.com/LinkedInLearning/react-graphql-2875095/blob/4b8ae9b2939e4fa0459a09103249d578e73e86df/src/Query.js#L13).

```graphql
search(query: "${queryString} user:planetoftheweb sort:updated-desc", type: REPOSITORY, ${paginationKeyword}: ${pageCount}, ${paginationString}) {
```

Search is one of the options we can pass in our GraphQL query that is the equivalent to using the sarch box when visiting github.com.

Here's a sample video from the course:

<div style="position:relative;height:0;padding-bottom:56.25%"><iframe width="640" height="360" src="https://www.linkedin.com/learning/embed/building-a-graphql-project-with-react-js/building-a-search-component?claim=AQFcKD6ZFShO8QAAAXhji2o3mgSP_E29VMMpq_Kmkhk-TPYaic6xqSImtjG2x4aeVLYPT8kn4gI6bRsjuwdUaoQ0SVLqfDYxK9CIoHQo3B1XubVfsAmGwZfgSP3SLcvyHqsMeex-slndN47sBF0Fp5CQrln2M1aeXIR05smrm0uTLSFz4z02AlLx8uIBa7n40F8vdvnO7rZYP4EFkvBzPBa9EvVit36424J8VL444Riv6cK6qLp02IfuO20t0kBKazmSYgautYiBlaWNT7rsTDx2nr-kVtyMwPmCYCYvTdANFk5R72L6wzou9PH-sBfjP0o3GqAoXAZIFy2aVseFqODtTuDWkiV_sQcQ9IE5NN4jF5wPNqrcn_azM3a1r2MrMqqcu1lyxC7vyGZgDPknQhnRHeE4jN4v9BIl4YAHYrjjx4yIkd4mPNfLjdjla4JPhr2KwtWZQ_wZuY4VfxAJj55FBIGdGT5-_kwTJ0cjHcWLAc3NaaVJOsxKlfiy8RFjpo5y2KMtBx-apB0_5QioJoDGgZtNa3lT72Vk0oNFh6b_US-YL2TJGNRdmeyVcEkeHBhmKtyulDUj4OfibSfVNburYVm62m1oZPCpQFWTAxzBsiI92u3mX5F4Y5_GH3nyDWkXlSaNZ6nyVJaC15HTHsrYSR5z3vyoiIUVa_c-4XicPneoCWp_HhjKuDNzc04H01I0_Gao-pT59eRteOCtWJeOIg6vnZeYOb8AF-ad4fc" mozallowfullscreen="true" webkitallowfullscreen="true" allowfullscreen="true" frameborder="0" style="position:absolute;width:100%;height:100%;left:0"></iframe></div><p><strong><a href="https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?trk=embed_lil">Building a search component</a></strong> from <strong><a href="https://www.linkedin.com/learning/building-a-graphql-project-with-react-js?trk=embed_lil">Building a GraphQL Project with React.js</a></strong> by <strong><a href="https://www.linkedin.com/learning/instructors/ray-villalobos?trk=embed_lil">Ray Villalobos</a></strong></p>

## Conclusion

I know this seems like a lot to take in and that's why I built this course. I take you step by step through putting this together, It's a great way to get some practical experience and I go a lot slower than what I did here.

I know GraphQL isn't for everyone, but it's a great tool to be familiar with and have in your resume. Within the next month I have a new course coming out where I show you how to do something simpler with a REST API.

I'm pretty excited about that course I also show you how to use Tailwind with React, so look for another episode of 'The Launch' after that course releases.

- **Follow Me**: [On LinkedIn](https://www.linkedin.com/in/planetoftheweb/)
- **This Course**: [GraphQL with React](https://www.linkedin.com/posts/planetoftheweb_databasequeries-reactjs-graphql-activity-6780348999586131968-lkVK)
- **Courses**: [All my Courses](https://www.linkedin.com/learning/instructors/ray-villalobos?u=104)
- **Blog**: [raybo.org](https://raybo.org/)
- **YouTube**: [youtube.com/planetoftheweb](https://www.youtube.com/channel/UCnd308ZWP--wV2-_j3LZU9A)
