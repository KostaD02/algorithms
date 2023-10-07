# Algorithms

In this repository, there will be some major algorithms used for sorting and searching. Each algorithm is separated into folders for search and sort. Each folder contains JavaScript files with algorithms in them. Each folder has a main.js file for the main part of the code; it serves as a wrapper for testing and seeing how fast each algorithm runs. Both main.js files have a config object which can be modified as you want to test the algorithms. There are already some great algorithms written; you can simply test them as you like, push them to edge cases, increase array size, or modify random number ranges (min-max).

## Config:

```js
const config = {
  SHOW_NUMBERS_LOG: false, // prints array of numbers
  SHOW_FASTEST_TIME_ALGORITHM: true, // showing fastest algoritm
  PRINT_IN_TABLE: true, // prints result in table
  RANDOM_MAX_NUMBER: 1000, // array numbers max value
  RANDOM_MIN_NUMBER: 1, // array numbers min value
  NUMBERS_SIZE: 1000, // array size
};
```

## Run code

To run the code, you could simply use the Node environment or modify some parts of the code for running it on the web.

Sort code run:

```bash
node "{path}/algoritms/sort/main.js"
```

Search code run:

```bash
node "{path}/algoritms/search/main.js"
```

## Contribution

Contributing to a GitHub repository under the Creative Commons Attribution 4.0 International License presents a wonderful opportunity to bolster an open-source project and participate in a thriving collaborative community. This license facilitates the sharing and adaptation of creative works, providing a robust framework for collective efforts.
<br>

Below are key points to guide your effective contributions:

- <b>Understand the License</b>: Familiarize yourself with the terms of the CC BY 4.0 license. It allows others to share and adapt the work, even for commercial purposes, as long as they provide appropriate attribution to the original creator.
- <b>Fork the Repository</b>: Start by forking the repository to create your own copy. This way, you can freely make changes without affecting the original project.
- <b>Create a New Branch</b>: For each new feature or fix, create a new branch in your forked repository. This keeps your work separate and makes it easier to manage.
- <b>Write High-Quality Code</b>: Follow the project's coding conventions and style guidelines. Write clear, well-documented code that adheres to best practices.
- <b>Thorough Testing</b>: Before making a pull request, thoroughly test your code to ensure it functions as expected.
- <b>Commit and Push Your Changes</b>: Make concise, meaningful commits with clear messages. Push your changes to your forked repository.
- <b>Open a Pull Request</b>: Once you're confident in your changes, open a pull request (PR) to the original repository. Describe the changes you've made, why they are valuable, and any potential impacts.
- <b>Engage in Discussions</b>: Be open to feedback and engage in discussions with other contributors and maintainers. Address any feedback promptly and make necessary adjustments.
- <b>Updating the contribution File</b>: Write your information in [contributors](https://github.com/KostaD02/algorithms/blob/main/contributors.md) file.

### License

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.