export type Theme = {
    id: number,
    name: string,
    number: string,
    courseslide_set: CourseSlide[] 
}

export type CourseSlide = {
    id: number,
    html_layout: string
}