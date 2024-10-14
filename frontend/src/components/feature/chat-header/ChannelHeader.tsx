import { PageHeader } from "@/components/layout/Heading/PageHeader"
import { ChannelIcon } from "@/utils/layout/channelIcon"
import { ChannelListItem } from "@/utils/channel/ChannelListProvider"
import { EditChannelNameButton } from "../channel-details/rename-channel/EditChannelNameButton"
import { Button, Flex, Heading } from "@radix-ui/themes"
import ChannelHeaderMenu from "./ChannelHeaderMenu"
import { ViewChannelMemberAvatars } from "./ViewChannelMemberAvatars"
import { BiChevronLeft } from "react-icons/bi"
import { Link } from "react-router-dom"
import { RiPushpinLine } from "react-icons/ri"

interface ChannelHeaderProps {
    channelData: ChannelListItem
}

export const ChannelHeader = ({ channelData }: ChannelHeaderProps) => {

    // The channel header has the channel name, the channel type icon, edit channel name button, and the view or add members button

    return (
        <PageHeader>
            <Flex align='center'>
                <Link to='/channel' className="block bg-transparent hover:bg-transparent active:bg-transparent sm:hidden">
                    <BiChevronLeft size='24' className="block text-gray-12" />
                </Link>
                <Flex gap='4' align={'center'} className="group animate-fadein pr-4">
                    <Flex gap='1' align={'center'}>
                        <ChannelIcon type={channelData.type} size='18' />
                        <Heading
                            size={{
                                initial: '4',
                                sm: '5'
                            }}
                            className="mb-0.5 text-ellipsis line-clamp-1">{channelData.channel_name}</Heading>
                    </Flex>
                    <EditChannelNameButton channelID={channelData.name} channel_name={channelData.channel_name} channelType={channelData.type} disabled={channelData.is_archived == 1} buttonVisible={channelData.pinned_messages && channelData.pinned_messages.length > 0} />
                    {channelData.pinned_messages && channelData.pinned_messages.length > 0 &&
                        <Button size='1' variant='soft' color='gray' aria-label="View pinned messages"
                            title='View pinned messages'>
                            <RiPushpinLine size='14' />{channelData.pinned_messages.length}
                        </Button>
                    }
                </Flex>
            </Flex>

            <Flex gap='2' align='center' className="animate-fadein">
                <ViewChannelMemberAvatars channelData={channelData} />
                <ChannelHeaderMenu channelData={channelData} />
            </Flex>
        </PageHeader>
    )
}