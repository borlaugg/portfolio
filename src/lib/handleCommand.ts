import help from "@/lib/commands/help";
import about from "@/lib/commands/about";
import banner from "@/lib/commands/banner";
import hobbies from "@/lib/commands/hobbies";
import skills from "@/lib/commands/skills";
import papers from "@/lib/commands/papers";
import blog from "@/lib/commands/blog";
import experience from "@/lib/commands/experience";
import hepl from "@/lib/commands/hepl";
import code from "@/lib/commands/code";
import awards from "@/lib/commands/awards";
import social from "@/lib/commands/social";
import projects from "@/lib/commands/projects";

export default function handleCommand(command: string): string[] | { text: string, url: string }[] | null {
    switch (command) {
        case 'help':
            return help()
        case 'about':
            return about()
        case 'cv':
            return cv()
        case 'banner':
            return banner()
        case 'skills':
            return skills()
        case 'hobbies':
            return hobbies()
        case 'papers':
            return papers()
        case 'social':
            return social()
        case 'clear':
            return null
        default:
            return ['Hey, I don\'t have a response for what you just typed :(']
    }
}
