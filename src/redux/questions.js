import { createSlice } from '@reduxjs/toolkit';

export const questionSlice = createSlice({
  name: 'questions',
  initialState: {
    questions: [
      {
        id: 1,
        title: 'Basics of HTML',
        questions: [
          {
            id: 1,
            text: 'Which element is used for a top-level heading?',
            correctAnswer: 'h1',
            incorrectAnswers: ['div', 'h0', 'p'],
          },
          {
            id: 2,
            text: 'Which element is used for a page break?',
            correctAnswer: 'br',
            incorrectAnswers: ['div', 'break', 'p'],
          },
          {
            id: 3,

            text: 'Which markup makes a link?',
            correctAnswer: "<a href='/cats' />",
            incorrectAnswers: [
              "<href a='/cats' />",
              "<a src='/cats' />",
              "<link href='/cats' />",
            ],
          },
          {
            id: 4,
            text: 'Which markup correctly creates an image?',
            correctAnswer: "<img src='cat.jpg' />",
            incorrectAnswers: [
              "<src img='cat.jpg' />",
              '<img>cat.jpg</img>',
              '<src>cat.jpg</img>',
            ],
          },
        ],
      },
      {
        id: 2,
        title: 'Basics of CSS',
        questions: [
          {
            id: 1,
            text: 'Which markup correctly assigns HTML element a CSS class?',
            correctAnswer: "<div class='cat'>hi</div>",
            incorrectAnswers: [
              "<div className='cat'>hi</div>",
              "<div>hi</div className='cat'>",
              "<div class='cat'>hi</div class='cat'>",
            ],
          },
          {
            id: 2,
            text: 'Which markup is CSS that sets all cat classes to have pink font?',
            correctAnswer: '.cat { color: pink; }',
            incorrectAnswers: [
              'cat { color: pink; }',
              '<cat> color: pink; </cat>',
            ],
          },
          {
            id: 3,
            text: 'Which markup is CSS that sets all elements of id "dog" to be bold?',
            correctAnswer: '#dog { font-weight: bold; }',
            incorrectAnswers: ['dog { weight: bold; }', '.dog { font: bold; }'],
          },
        ],
      },
    ],
  },
  reducers: {},
});

export const { question } = questionSlice.actions;

export default questionSlice.reducer;
