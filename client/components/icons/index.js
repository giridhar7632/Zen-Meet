import React from 'react'

function GenerateIcon(data, props) {
  return React.createElement(
    data.tag,
    { ...data.attr, ...props },
    data.child.map((item) => React.createElement(item.tag, { ...item.attr, key: Math.random() }))
  )
}

export function ChevronRight(props) {
  return GenerateIcon(
    {
      tag: 'svg',
      attr: {
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
      child: [{ tag: 'polyline', attr: { points: '9 6 15 12 9 18' } }],
    },
    props
  )
}

export function Close(props) {
  return GenerateIcon(
    {
      tag: 'svg',
      attr: {
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
      child: [
        {
          tag: 'path',
          attr: { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' },
        },
        { tag: 'line', attr: { x1: '18', y1: '6', x2: '6', y2: '18' } },
        { tag: 'line', attr: { x1: '6', y1: '6', x2: '18', y2: '18' } },
      ],
    },
    props
  )
}

export function Facebook(props) {
  return GenerateIcon(
    {
      tag: 'svg',
      attr: {
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
      child: [
        {
          tag: 'path',
          attr: {
            d: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
          },
        },
      ],
    },
    props
  )
}

export function Github(props) {
  return GenerateIcon(
    {
      tag: 'svg',
      attr: {
        viewBox: '0 0 24 24',
        width: props.size || '24',
        height: props.size || '24',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      child: [
        {
          tag: 'path',
          attr: {
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            d: 'M9 19C4.7 20.4 4.7 16.5 3 16M15 21V17.5C15 16.5 15.1 16.1 14.5 15.5C17.3 15.2 20 14.1 20 9.49995C19.9988 8.30492 19.5325 7.15726 18.7 6.29995C19.0905 5.26192 19.0545 4.11158 18.6 3.09995C18.6 3.09995 17.5 2.79995 15.1 4.39995C13.0672 3.87054 10.9328 3.87054 8.9 4.39995C6.5 2.79995 5.4 3.09995 5.4 3.09995C4.94548 4.11158 4.90953 5.26192 5.3 6.29995C4.46745 7.15726 4.00122 8.30492 4 9.49995C4 14.1 6.7 15.2 9.5 15.5C8.9 16.1 8.9 16.7 9 17.5V21',
          },
        },
      ],
    },
    props
  )
}

export function Instagram(props) {
  return GenerateIcon(
    {
      tag: 'svg',
      attr: {
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
      child: [
        {
          tag: 'path',
          attr: {
            stroke: 'currentColor',
            d: 'M16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4Z',
          },
        },
        {
          tag: 'path',
          attr: {
            stroke: 'currentColor',
            d: 'M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z',
          },
        },
      ],
    },
    props
  )
}

export function Linkedin(props) {
  return GenerateIcon(
    {
      tag: 'svg',
      attr: {
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
      child: [
        {
          tag: 'path',
          attr: {
            d: 'M8 11V16M8 8V8.01M12 16V11M16 16V13C16 12.4696 15.7893 11.9609 15.4142 11.5858C15.0391 11.2107 14.5304 11 14 11C13.4696 11 12.9609 11.2107 12.5858 11.5858C12.2107 11.9609 12 12.4696 12 13M6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4Z',
          },
        },
      ],
    },
    props
  )
}

export function Twitter(props) {
  return GenerateIcon(
    {
      tag: 'svg',
      attr: {
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
      child: [
        {
          tag: 'path',
          attr: { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' },
        },
        {
          tag: 'path',
          attr: {
            d: 'M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z',
          },
        },
      ],
    },
    props
  )
}

export function Pencil(props) {
  return GenerateIcon(
    {
      tag: 'svg',
      attr: {
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
      child: [
        {
          tag: 'path',
          attr: { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' },
        },
        {
          tag: 'path',
          attr: {
            d: 'M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4',
          },
        },
        {
          tag: 'line',
          attr: { x1: '13.5', y1: '6.5', x2: '17.5', y2: '10.5' },
        },
      ],
    },
    props
  )
}

export function Trash(props) {
  return GenerateIcon(
    {
      tag: 'svg',
      attr: {
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
      child: [
        {
          tag: 'path',
          attr: { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' },
        },
        {
          tag: 'line',
          attr: { x1: '4', y1: '7', x2: '20', y2: '7' },
        },
        {
          tag: 'line',
          attr: { x1: '10', y1: '11', x2: '10', y2: '17' },
        },
        {
          tag: 'line',
          attr: { x1: '14', y1: '11', x2: '14', y2: '17' },
        },
        {
          tag: 'path',
          attr: {
            d: 'M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12',
          },
        },
        {
          tag: 'path',
          attr: {
            d: 'M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3',
          },
        },
      ],
    },
    props
  )
}
