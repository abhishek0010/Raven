import { RavenThreadParticipant } from "./RavenThreadParticipant"

export interface RavenThread {
    creation: string
    name: string
    modified: string
    owner: string
    modified_by: string
    docstatus: 0 | 1 | 2
    parent?: string
    parentfield?: string
    parenttype?: string
    idx?: number
    /**	Thread Message : Link - Raven Message	*/
    thread_message: string
    /**	Title : Long Text  */
    title: string
    /** Channel ID : Link - Raven Channel */
    channel_id: string
    /**	Participants : Table - Raven Thread Participant  */
    participants: RavenThreadParticipant[]
}